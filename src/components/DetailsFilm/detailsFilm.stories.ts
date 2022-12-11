import { DetailsFilmUI } from '@components/DetailsFilm/detailsFilm';

export default {
    title: 'DetailsFilmUI',
    component: DetailsFilmUI,
};

export const Default = (args:any) => {
    return DetailsFilmUI.renderTemplate(args);
};

Default.args = {
    'actors': [
      {
        'avatar': 'https://www.vokrug.tv/pic/person/e/2/1/3/e2130d7f512af9f6bbf544b64e7939a5.jpg',
        'character': 'Тирион Ланистер',
        'id': 2132,
        'name': 'Питер Динклэйдж'
      }
    ],
    'age_limit': '18+',
    'artists': [
      {
        'id': 123123,
        'name': 'Стивен Спилберг'
      }
    ],
    'box_office_dollars': 60000000,
    'budget': 18323222,
    'composers': [
      {
        'id': 123123,
        'name': 'Стивен Спилберг'
      }
    ],
    'count_actors': 783,
    'count_negative_reviews': 373,
    'count_neutral_reviews': 63,
    'count_positive_reviews': 65,
    'count_ratings': 786442,
    'count_seasons': 8,
    'currency_budget': 'USD',
    'description': 'Британская лингвистка Алетея прилетает из Лондона',
    'directors': [
      {
        'id': 123123,
        'name': 'Стивен Спилберг'
      }
    ],
    'duration_minutes': 55,
    'end_year': '2019',
    'genres': [
      'фантастика',
      'боевик'
    ],
    'images': [
      '1',
      '2',
      '3',
      '4'
    ],
    'montage': [
      {
        'id': 123123,
        'name': 'Стивен Спилберг'
      }
    ],
    'name': 'Игра престолов',
    'operators': [
      {
        'id': 123123,
        'name': 'Стивен Спилберг'
      }
    ],
    'original_name': 'Game of Thrones',
    'poster_hor': '23',
    'prod_companies': [
      'HBO'
    ],
    'prod_countries': [
      'США',
      'Великобритания'
    ],
    'prod_year': '2011',
    'producers': [
      {
        'id': 123123,
        'name': 'Стивен Спилберг'
      }
    ],
    'rating': 9.2,
    'short_description': 'Что вы знаете о джинах кроме желайний?',
    'slogan': 'Победа или смерть',
    'tags': [
      'популярное',
      'сейчас в кино'
    ],
    'type': 'serial',
    'writers': [
      {
        'id': 123123,
        'name': 'Стивен Спилберг'
      }
    ]
};
