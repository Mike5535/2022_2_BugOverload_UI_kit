import { PreviewUserCollectionUI } from '@components/PreviewUserCollection/previewUserCollection'

export default {
    title: 'PreviewUserCollectionUI',
    component: PreviewUserCollectionUI,
};

export const Default = (args:any) => {
    return PreviewUserCollectionUI.renderTemplate(args);
};

Default.args = {
    poster: 'https://i.pinimg.com/564x/84/13/dc/8413dc1f5767cadbe8b1d09aa796eeea.jpg',
    create_time: '11.12.2021',
    count_films: 9,
    name: 'Избранное',
};
