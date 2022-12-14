import template from '@components/Signup/signup.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Signup/signup.scss';

export class SignupUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
