import template from '@components/PersonMed/personMed.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/PersonMed/personMed.scss';

export class PersonMedUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
