import { AboutFilmUI } from '@components/AboutFilm/aboutFilm'

export default {
    title: 'AboutFilmUI',
    component: AboutFilmUI,
};

export const Default = (args:any) => {
    return AboutFilmUI.renderTemplate(args);
};

Default.args = {
    short_description: 'Краткое описание',
    id: 0,
    rating: 9.8,
    slogan: 'Слоган',
    type: 'film',
    age_limit: '18+',
    duration: '249 мин',
    prod_year: 2011,
    end_year: 2019,
    name: 'Название',
    original_name: 'Оригинальное название',
    poster_hor: 'default',
    directors: [
        {
            "id": 123123,
            "name": 'Тимоти Лири'
        }
    ],
    actors: [        {
            "id": 123123,
            "name": 'Бредли Купер, '
        },
        {
            "id": 123123,
            "name": 'Кевин Спейси'
        },
    ],

    genres: [
        'жанры',
    ],
    prod_companies: [
        'Компания',
    ],
    prod_countries: [
        'Страна',
    ],
};
