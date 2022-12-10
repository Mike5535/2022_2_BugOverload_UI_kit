import template from '@components/Collection/collection.handlebars';
import { Component } from '@components/Component';

import '@/index.scss';
import '@components/Collection/collection.scss';

/**
* Отрисовывает список фильмов в виде коллекции.
* Перерисовывается при изменении state 'collection'
*/
export class CollectionUI extends Component {
    static renderTemplate(args:any) {
        return template(args);
    }
}
