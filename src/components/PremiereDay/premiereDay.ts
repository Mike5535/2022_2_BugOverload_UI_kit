import template from '@components/PremiereDay/premiereDay.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/PremiereDay/premiereDay.scss';

export class PremiereDayUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
