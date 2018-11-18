import Config from './app.config';
import appCache from './app.service.cache';

const wordpressService = {
	cacheRequest(path, cacheTime) {
		return new Promise((resolve, reject) => {
			appCache.get(path, cacheTime)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	getMenuByName(menuName) {
		const self = this;
		return new Promise((resolve, reject) => {
			this.cacheRequest(Config.wpDomain + `wp-json/wp-api-menus/v2/menus/?name=${menuName}`, 0)
				.then((response) => {
					resolve(self.getMenu(response.data[0].term_id));
				})
				.catch((error) => {
					reject(error);
				});
		});
	},
	getMenu(id) {
		return new Promise((resolve, reject) => {
			this.cacheRequest(Config.wpDomain + `wp-json/wp-api-menus/v2/menus/${id}`, 0)
				.then((response) => {
					resolve(response.data);
				})
				.catch(error => reject(error));
		});
	},
	getCategory(id, slug, parentId) {
		return new Promise((resolve, reject) => {
			let path = Config.wpDomain + `wp-json/wp/v2/categories/${id}`;
			if (!id && slug) {
				path = Config.wpDomain + `wp-json/wp/v2/categories/?slug=${slug}&fields=id,name,slug,parent,link`;
			} else if (!id && !slug && parentId) {
				path = Config.wpDomain + `wp-json/wp/v2/categories/?parent=${parentId}&fields=id,name,slug,parent,link`;
			} else {
				path = Config.wpDomain + 'wp-json/wp/v2/categories/?fields=id,name,slug,parent,link`';
			}
			this.cacheRequest(path, 0)
				.then(response => resolve(response.data))
				.catch(error => reject(error));
		});
	},
	getPosts(categoryId, page, perPage, order = 'desc') {
		return new Promise((resolve, reject) => {
			const path = Config.wpDomain + `wp-json/wp/v2/posts?categories=${categoryId}&page=${page}&order=${order}&per_page=${perPage}&fields=id,title,slug,date,better_featured_image,excerpt`;
			this.cacheRequest(path, 0)
				.then((response) => {
					let totalPages = (response.headers.hasOwnProperty('X-WP-TotalPages')) ? response.headers['X-WP-TotalPages'][0] : 0;
					if (totalPages === 0) {
						totalPages = (response.headers.hasOwnProperty('x-wp-totalpages')) ? response.headers['x-wp-totalpages'][0] : 0;
					}
					const responseData = {
						posts: response.data,
						totalPages,
					};
					resolve(responseData);
				})
				.catch(error => reject(error));
		});
	},
	getPost(postId, postSlug) {
		return new Promise((resolve, reject) => {
			let path = Config.wpDomain + `wp-json/wp/v2/posts/${postId}?fields=id,title,slug,tags,date,better_featured_image,content,rest_api_enabler,pure_taxonomies`;
			if (!postId && postSlug) {
				path = Config.wpDomain + `wp-json/wp/v2/posts/?slug=${postSlug}&fields=id,title,slug,tags,date,better_featured_image,content,rest_api_enabler,pure_taxonomies`;
			}
			this.cacheRequest(path, 0)
				.then(response => resolve(response.data))
				.catch(error => reject(error));
		});
	},
	getPage(pageId, pageSlug) {
		return new Promise((resolve, reject) => {
			let path = Config.wpDomain + `wp-json/wp/v2/pages/${pageId}`;
			if (!pageId && pageSlug) {
				path = Config.wpDomain + `wp-json/wp/v2/pages/?slug=${pageSlug}`;
			}
			this.cacheRequest(path, 0)
				.then((response) => {
					const resData = (Array.isArray(response.data))?response.data[0]:response.data;
					resolve(resData);
				})
				.catch(error => reject(error));
		});
	},
	getCategoryChildren(id) {
		return new Promise((resolve, reject) => {
			this.cacheRequest(Config.wpDomain + `wp-json/wp/v2/categories?parent=${id}`, 0)
				.then(response => resolve(response.data))
				.catch(error => reject(error));
		});
	},
};

export default wordpressService;
