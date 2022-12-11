import template from '@components/PremiereFilm/premiereFilm.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/PremiereFilm/premiereFilm.scss';

export class PremiereFilmUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
