import template from '@components/InputReview/inputReview.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/InputReview/inputReview.scss';

export class InputReviewUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
