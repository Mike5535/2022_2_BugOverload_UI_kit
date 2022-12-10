import { DescriptionFilmUI } from '@components/DescriptionFilm/descriptionFilm'

export default {
    title: 'DescriptionFilmUI',
    component: DescriptionFilmUI,
};

export const Default = (args:any) => {
    return DescriptionFilmUI.renderTemplate(args);
};

Default.args = {
    text: 'После принятия образа аватара солдат Джейк Салли становится предводителем народа нави и берет на себя миссию по защите новых друзей от корыстных бизнесменов с Земли. Теперь ему есть за кого бороться — с Джейком его прекрасная возлюбленная Нейтири. Когда на Пандору возвращаются до зубов вооруженные земляне, Джейк готов дать им отпор.',
};
