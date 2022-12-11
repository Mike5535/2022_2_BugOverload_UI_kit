import templateError from '@components/Message/errorMessage.handlebars';
import templateSuccess from '@components/Message/successMessage.handlebars';
import { Component } from '@components/Component';
import '@/index.scss';
import '@components/Message/errorMessage.scss';
import '@components/Message/successMessage.scss';

/**
* Добавляет в root в index.html сообщение, которое изчезает через 2 секунды
*
*/
export class MessageUI extends Component {
    static renderTemplateError(args:any) {
        return templateError(args);
    }

    static renderTemplateSuccess(args:any) {
        return templateSuccess(args);
    }
}
