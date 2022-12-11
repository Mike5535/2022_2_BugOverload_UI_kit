import template from '@components/MenuInfoFilm/menuInfoFilm.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/MenuInfoFilm/menuInfoFilm.scss';

/**
* Отрисовывает меню для переключения описания фильма и полной информацией о нём
* Отвечает за создание классов Rating, Description и Details
*/
export class MenuInfoFilmUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
