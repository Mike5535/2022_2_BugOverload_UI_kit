import template from '@components/Modal/modal.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Modal/modal.scss';

export class ModalUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
