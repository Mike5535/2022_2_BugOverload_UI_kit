import { UserCollListUI } from '@components/UserCollList/userCollList'
import { PreviewUserCollectionUI } from '@components/PreviewUserCollection/previewUserCollection'

export default {
    title: 'UserCollListUI',
    component: UserCollListUI,
};

export const Default = (args:any) => {
    return UserCollListUI.renderTemplate(args);
};

const collsData = [
    {
        poster: 'https://i.pinimg.com/564x/84/13/dc/8413dc1f5767cadbe8b1d09aa796eeea.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/fa/c6/83/fac683f73551953c6a009611cbf66f8f.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/b8/96/a9/b896a97bbc9026853f5f837ec9fd2c10.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/dc/1f/5d/dc1f5d126a7ea69d6019937e3bdeb8ba.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/0b/80/f7/0b80f720c9734fee9769ad7c3489e6a7.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/af/c7/ba/afc7bac4fcf21ff34e20e6fe49c82213.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/90/d4/6b/90d46b3d84129cd1864534d091ed0e1e.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/5e/6b/80/5e6b8044b00ecbef9535c5dc5c6c735d.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/5e/00/9f/5e009faac066ae9115f3a6ee20359424.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/f4/1b/f9/f41bf9f739ee0450cbedf247279ee799.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },
    {
        poster: 'https://i.pinimg.com/564x/ef/24/4e/ef244e3621a296892bbb02117c1d76a3.jpg',
        create_time: '11.12.2021',
        count_films: 9,
        name: 'Избранное',
    },

];

Default.args = {
    collections: collsData.reduce((res: string, collData: any) => res + PreviewUserCollectionUI.renderTemplate(collData), ''),
};
