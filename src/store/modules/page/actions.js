import wordpressService from '../../../app.service';

const getPage = ({
	commit,
	state,
}, slug) => wordpressService.getPage(null, slug).then((page) => {
		console.log('getPage');
		commit('PAGE_UPDATED', page);
	}).catch((error) => {
		console.log(error);
	});

export { getPage as default };
