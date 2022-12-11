import template from '@components/PremiereList/premiereList.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/PremiereList/premiereList.scss';

export class PremiereListUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
