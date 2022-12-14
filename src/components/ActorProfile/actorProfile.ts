import template from '@components/ActorProfile/actorProfile.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/ActorProfile/actorProfile.scss';

export class ActorProfileUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
