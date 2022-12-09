import template from '@components/Header/header.handlebars';
import { Component } from '@components/Component';
import '@/index.scss'

export class Header extends Component {
    constructor(props :componentProps) {
        super(props);
        this.state = {
            user: null,
        };
    }

    render() {
        return template();
    }
}
