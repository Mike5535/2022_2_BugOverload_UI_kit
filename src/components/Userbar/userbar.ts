import template from '@components/Userbar/userbar.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Userbar/userbar.scss';

export class UserbarUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
