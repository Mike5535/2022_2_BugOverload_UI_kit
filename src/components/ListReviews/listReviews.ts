import template from '@components/ListReviews/listReviews.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/ListReviews/listReviews.scss';

/**
* Отрисовывает меню для переключения описания фильма и полной информацией о нём
* Отвечает за создание классов Rating, Description и Details
*/
export class ListReviewsUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
