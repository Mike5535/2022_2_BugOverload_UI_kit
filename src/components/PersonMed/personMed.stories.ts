import { PersonMedUI } from '@components/PersonMed/personMed'

export default {
    title: 'PersonMedUI',
    component: PersonMedUI,
};

export const Default = (args: any) => {
    return PersonMedUI.renderTemplate(args);
};

Default.args = {
    name: 'Кристиан Бэйл',
    professions: [
        'актер',
        'продюссер',
    ],
    age: '33',
    count_films: '130',
    avatar: "https://uznayvse.ru/images/catalog/2022/2/christian-bale_26.jpg",
    id: "1",
};
