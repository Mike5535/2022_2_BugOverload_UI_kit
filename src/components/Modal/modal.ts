import template from '@components/Modal/modal.handlebars';
import '@/index.scss';
import '@components/InputReview/inputReview.scss';

export interface Modal {
    root: HTMLElement;
}

/**
* Отрисовывает модальное окно
*/
export class ModalUI {
    static renderTemplate(args:any) {
        return template(args);
    }
};
