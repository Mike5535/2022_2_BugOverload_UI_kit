import template from '@components/Rating/rating.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Rating/rating.scss';

export class RatingUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
