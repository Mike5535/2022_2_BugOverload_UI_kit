import template from '@components/ProfileChange/profileChange.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/ProfileChange/profileChange.scss';

export class ProfileChangeUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
