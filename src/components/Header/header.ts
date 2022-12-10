import template from '@components/Header/header.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Header/header.scss';
import '@icons/icon-search.png';
import '@icons/LogoMOVIEGATE.png';

export class HeaderUI extends Component {
    constructor(props :componentProps) {
        super(props);
    }

    renderTemplate(args:any) {
        return template(args);
    }
}
