import template from '@components/ReviewStatistic/reviewStatistic.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/ReviewStatistic/reviewStatistic.scss';

export class ReviewStatisticUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
