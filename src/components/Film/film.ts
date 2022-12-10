import template from '@components/Film/film.handlebars';
import '@/index.scss';
import '@components/Film/film.scss';


export class FilmUI {
    static renderTemplate(args:any) {
        return template(args);
    }
}
