import template from '@components/AboutFilm/aboutFilm.handlebars';
import '@/index.scss';
import '@components/AboutFilm/aboutFilm.scss';
/**
* Отрисовывает стилизованную общую информацию о фильме.
* Создаёт компонент выпадающего меню для сохранения в коллекции
*/
export class AboutFilmUI {
    /**
     * Отрисовывает компонент, используя location и hbs-template.
     * Навешивает обработчики на пользовательский интерфейс, генерируемый компонентом
     */
    static renderTemplate(args:any) {
        return template(args);
    }
}
