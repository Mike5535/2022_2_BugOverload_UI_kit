import template from '@components/Review/review.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Review/review.scss';

export class ReviewUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
