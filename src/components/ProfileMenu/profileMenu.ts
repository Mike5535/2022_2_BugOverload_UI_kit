import template from '@components/ProfileMenu/profileMenu.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/ProfileMenu/profileMenu.scss';

export class ProfileMenuUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
