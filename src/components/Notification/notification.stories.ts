import { NotificationUI } from '@components/Notification/notification'

export default {
    title: 'NotificationUI',
    component: NotificationUI,
};

export const Default = (args:any) => {
    return NotificationUI.renderTemplate(args);
};

Default.args = {
    id: 11,
    poster_ver: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/0d134040-295d-420e-9cfb-9546522f6e3b/300x450',
    name: '«V» значит Вендетта',
    rating: 7.8,
    ticket: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    prod_date: '11.12.2022',
};
