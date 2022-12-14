import template from '@components/Genre/genre.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Genre/genre.scss';

export class GenreUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
