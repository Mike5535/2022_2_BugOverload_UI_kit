import { CollectionUI } from '@components/Collection/collection'
import { FilmUI } from '@components/Film/film';

export default {
    title: 'CollectionUI',
    component: CollectionUI,
};

export const Default = (args:any) => {
    return CollectionUI.renderTemplate(args);
};

const filmsData = [{
    name: 'Аватар: Путь воды',
    end_year: '2022',
    genres: [
      'фэнтези',
      'приключения'
    ],
    id: 23,
    poster_ver: 'https://www.luccacinema.it/wp-content/uploads/2022/09/avatar2-300x444@2x.jpg',
    prod_year: '2010',
    rating: 8.3,
},{
    name: 'Аватар: Путь воды',
    end_year: '2022',
    genres: [
      'фэнтези',
      'приключения'
    ],
    id: 23,
    poster_ver: 'https://www.luccacinema.it/wp-content/uploads/2022/09/avatar2-300x444@2x.jpg',
    prod_year: '2010',
    rating: 8.3,
},{
    name: 'Аватар: Путь воды',
    end_year: '2022',
    genres: [
      'фэнтези',
      'приключения'
    ],
    id: 23,
    poster_ver: 'https://www.luccacinema.it/wp-content/uploads/2022/09/avatar2-300x444@2x.jpg',
    prod_year: '2010',
    rating: 8.3,
},{
    name: 'Аватар: Путь воды',
    end_year: '2022',
    genres: [
      'фэнтези',
      'приключения'
    ],
    id: 23,
    poster_ver: 'https://www.luccacinema.it/wp-content/uploads/2022/09/avatar2-300x444@2x.jpg',
    prod_year: '2010',
    rating: 8.3,
},{
    name: 'Аватар: Путь воды',
    end_year: '2022',
    genres: [
      'фэнтези',
      'приключения'
    ],
    id: 23,
    poster_ver: 'https://www.luccacinema.it/wp-content/uploads/2022/09/avatar2-300x444@2x.jpg',
    prod_year: '2010',
    rating: 8.3,
},{
    name: 'Аватар: Путь воды',
    end_year: '2022',
    genres: [
      'фэнтези',
      'приключения'
    ],
    id: 23,
    poster_ver: 'https://www.luccacinema.it/wp-content/uploads/2022/09/avatar2-300x444@2x.jpg',
    prod_year: '2010',
    rating: 8.3,
}];

Default.args = {
    films: filmsData.reduce((res: string, filmData: any) => res + FilmUI.renderTemplate(filmData), ''),
};
