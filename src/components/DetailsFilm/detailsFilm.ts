import template from '@components/DetailsFilm/detailsFilm.handlebars';
import '@/index.scss';
import '@components/DetailsFilm/detailsFilm.scss';

export class DetailsFilmUI {
    static renderTemplate(args:any) {
        return template(args);
    }
}
