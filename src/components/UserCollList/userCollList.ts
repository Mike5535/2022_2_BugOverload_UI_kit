import template from '@components/UserCollList/userCollList.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/UserCollList/userCollList.scss';

export class UserCollListUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
