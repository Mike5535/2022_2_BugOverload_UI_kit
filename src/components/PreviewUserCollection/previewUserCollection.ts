import template from '@components/PreviewUserCollection/previewUserCollection.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/PreviewUserCollection/previewUserCollection.scss';

export class PreviewUserCollectionUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
