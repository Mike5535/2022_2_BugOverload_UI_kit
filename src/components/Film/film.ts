import template from '@components/Film/film.handlebars';
import '@/index.scss';
import './film.scss';

/**
* Помогает в создании отрендеренного фильма в HTML для последующей вставки на страницу
*
*/
export class Film {
    /**
    * Помогает в создании отрендеренного фильма в HTML для последующей вставки на страницу
    *
    * @param {filmData Object} filmData - объект с данными о фильме
    * @return {string} HTML созданного фильма
    */
    static createFilm(filmData: film, isUserCollection = false) {
        const film = template({
            ...filmData,
            // poster_ver: API.img.poster_ver(filmData.poster_ver),
            rating: roundFloat(filmData.rating),
            genres: Film.decoreFilmInfo(filmData),
            isUserCollection,
        });

        const div = document.createElement('div');
        div.insertAdjacentHTML('afterbegin', film);

        decoreColorRating(div, '.js-film-rating', filmData.rating);

        return div.innerHTML;
    }

    /**
    * Удаляет жанры, вставка которых приведёт к переносу строки в отображении.
    * Добавляет запятую ко всем жанрам, кроме последнего.
    *
    * @param {filmData Object} filmData - объект с данными о фильме
    */
    static decoreFilmInfo(filmData: film) {
        const maxLength = 31;
        const lenYear = String(filmData.year_prod).length;
        const maxLenGenre = maxLength - lenYear;

        let curLen = 0;
        const newListGenres: Array<string> = [];
        filmData.genres.forEach((genre) => {
            curLen += genre.length + 2;
            if (curLen <= maxLenGenre) {
                newListGenres.push(genre);
            } else {
                curLen -= genre.length + 2;
            }
        });

        return newListGenres.join(', ');
    }
}


const roundFloat = (rating: number) => {
    const rounded = Math.round(rating * 10) / 10;
    if (Number.isInteger(rounded)) {
        return `${rounded}.0`;
    }

    return `${rounded}`;
}

const decoreColorRating = (location: HTMLElement, className: string, rating: number) => {
    if (!location || !className) {
        return;
    }
    const filmRating: HTMLElement = location.querySelector(className);
    if (!rating) {
        filmRating.remove();
        return;
    }

    if (rating > 7.49) {
        filmRating.dataset.valueRating = 'positive';
        return;
    }

    if (rating > 5.19) {
        filmRating.dataset.valueRating = 'neutral';
        return;
    }

    filmRating.dataset.valueRating = 'negative';
};
