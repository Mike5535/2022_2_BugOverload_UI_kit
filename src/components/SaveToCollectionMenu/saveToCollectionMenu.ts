import template from '@components/SaveToCollectionMenu/saveToCollectionMenu.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/SaveToCollectionMenu/saveToCollectionMenu.scss';

export class SaveToCollectionMenuUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
