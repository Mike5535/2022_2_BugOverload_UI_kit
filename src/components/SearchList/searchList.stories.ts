import { SearchListUI } from '@components/SearchList/searchList'
import { PremiereFilmUI } from '@components/PremiereFilm/premiereFilm'

export default {
    title: 'SearchListUI',
    component: SearchListUI,
};

export const Default = (args:any) => {
    return SearchListUI.renderTemplate(args);
};

const film = {
    poster_ver: 'http://sun9-16.userapi.com/s/v1/if2/ON1LSAUuHOszOJzKyW6fgetcO-TUgUUenUQCpIwmdq2McYDKeyoBYOJPrPS4JIBubMBsq2dJmsQ_xAsuVApIjg18.jpg?size=200x428&quality=96&crop=0,0,336,720&ava=1',
    description: 'Британская лингвистка Алетея прилетает из Лондона',
    director: 'реж. Александр Пистолетов',
    duration: '97 мин. / 1ч. 37мин.',
    genres: 'фэнтези, приключения',
    id: 23,
    name: 'Я российский новый пират',
    countries: 'Россия',
    year_prod: '1984',
    rating: 8.2
}

Default.args = {
    name: 'Найденные клипы Александра Пистолетова',
    items: PremiereFilmUI.renderTemplate(film).repeat(5),
};
