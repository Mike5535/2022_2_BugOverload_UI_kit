import template from '@components/InputReview/inputReview.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/InputReview/inputReview.scss';

/**
* Отрисовывает форму для написания отзыва в виде модального окна
* Создаёт компонент выпадающего меню для сохранения в коллекции
*/
export class InputReviewUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
