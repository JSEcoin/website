import wordpressService from '../../../app.service';

const getMenu = ({ commit, state }) => wordpressService.getMenuByName('Main').then((menu) => {
    commit('BLOGMENU_UPDATED', menu.items);
  }).catch((error) => {
    console.log(error);
  });

export default {
  getMenu,
};
