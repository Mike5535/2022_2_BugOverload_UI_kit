import template from '@components/PreviewFilm/previewFilm.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/PreviewFilm/previewFilm.scss';

export class PreviewFilmUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
