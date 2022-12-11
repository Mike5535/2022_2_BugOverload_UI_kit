import template from '@components/PremiereFilmDate/premiereFilmDate.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/PremiereFilmDate/premiereFilmDate.scss';

export class PremiereFilmDateUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
