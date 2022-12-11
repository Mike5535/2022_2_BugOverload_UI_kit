import { PreviewFilmUI } from '@components/PreviewFilm/previewFilm'

export default {
    title: 'PreviewFilmUI',
    component: PreviewFilmUI,
};

export const Default = (args:any) => {
    return PreviewFilmUI.renderTemplate(args);
};

Default.args = {
    genres: 'фантастика, боевик',
    id: 23,
    name: 'Терминатор',
    // poster_hor: '',
    prod_year: 2008,
    rating: 8.8,
    short_description: 'Идет борьба сопротивления людей против машин'
};
