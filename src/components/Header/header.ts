import template from '@components/Header/header.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Header/header.scss';

export class HeaderUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
