/**
* Помогает в создании отрендеренного фильма в HTML для последующей вставки на страницу
*
*/
export declare class Film {
    /**
    * Помогает в создании отрендеренного фильма в HTML для последующей вставки на страницу
    *
    * @param {filmData Object} filmData - объект с данными о фильме
    * @return {string} HTML созданного фильма
    */
    static createFilm(filmData: film, isUserCollection?: boolean): string;
    /**
    * Удаляет жанры, вставка которых приведёт к переносу строки в отображении.
    * Добавляет запятую ко всем жанрам, кроме последнего.
    *
    * @param {filmData Object} filmData - объект с данными о фильме
    */
    static decoreFilmInfo(filmData: film): string;
}
