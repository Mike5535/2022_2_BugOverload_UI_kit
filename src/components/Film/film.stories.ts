import { FilmUI } from '@components/Film/film'

export default {
    title: 'FilmUI',
    component: FilmUI,
};

export const Default = (args:any) => {
    return FilmUI.renderTemplate(args);
};

Default.args = {
    name: 'Игра престолов',
    end_year: '2021',
    genres: [
      'фэнтези',
      'приключения'
    ],
    id: 23,
    poster_ver: 'https://www.luccacinema.it/wp-content/uploads/2022/09/avatar2-300x444@2x.jpg',
    prod_year: '2014',
    rating: 7.9,
};
