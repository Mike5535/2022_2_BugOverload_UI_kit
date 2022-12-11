import template from '@components/SearchList/searchList.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/SearchList/searchList.scss';

export class SearchListUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
