import { MenuInfoFilmUI } from '@components/MenuInfoFilm/menuInfoFilm'

export default {
    title: 'MenuInfoFilmUI',
    component: MenuInfoFilmUI,
};

export const Default = (args:any) => {
    return MenuInfoFilmUI.renderTemplate(args);
};

Default.args = {
    count_reviews: '5 рецензий',
    nickname: 'Сам Гослинг',
    user_avatar: 'https://i.pinimg.com/170x/90/7a/7a/907a7a415bc6bebb6a79224b7c7ad4ed.jpg',
};
