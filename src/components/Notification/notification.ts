import template from '@components/Notification/notification.handlebars';
import '@/index.scss';
import '@components/Notification/notification.scss';

export class NotificationUI {
    static renderTemplate(args:any) {
        return template(args);
    }
}
