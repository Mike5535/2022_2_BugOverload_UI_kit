import template from '@components/Login/login.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Login/login.scss';

export class LoginUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
