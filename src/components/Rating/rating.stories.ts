import { RatingUI } from '@components/Rating/rating'

export default {
    title: 'RatingUI',
    component: RatingUI,
};

export const UnSetted = (args:any) => {
    return RatingUI.renderTemplate(args);
};

export const Setted = (args:any) => {
    return RatingUI.renderTemplate(args);
};

UnSetted.args = {
    type_film: true,
    filmRating: 7.1,
    countRates: '22 оценки',
};

Setted.args = {
    rate: 8,
    dateRating: '11.01.2011',
    type_serial: true,
    filmRating: 7.1,
    countRates: '22 оценки',
};


