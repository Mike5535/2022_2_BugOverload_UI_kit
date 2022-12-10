import template from '@components/DescriptionFilm/descriptionFilm.handlebars';
import '@/index.scss';
import '@components/DescriptionFilm/descriptionFilm.scss';

export class DescriptionFilmUI {
    static renderTemplate(args:any) {
        return template(args);
    }
}
