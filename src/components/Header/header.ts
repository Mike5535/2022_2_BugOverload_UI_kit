import template from '@components/Header/header.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import './header.scss';

export class Header extends Component {
    constructor(props :componentProps) {
        super(props);
    }

    renderTemplate(args:any) {
        return template(args);
    }
}
