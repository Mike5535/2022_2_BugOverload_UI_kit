import { PremiereFilmDateUI } from '@components/PremiereFilmDate/premiereFilmDate'

export default {
    title: 'PremiereFilmDateUI',
    component: PremiereFilmDateUI,
};

export const Default = (args:any) => {
    return PremiereFilmDateUI.renderTemplate(args);
};

Default.args = {
    ticket: 'https://www.kinopoisk.ru/film/8240/',
    description: 'Будущее. После ядерной войны Землю постигла ужасная экологическая катастрофа. Поверхность планеты почти целиком покрывают леса, испускающие в атмосферу ядовитые споры растений. Оставшиеся в живых люди живут в зонах, ещё не покрытых лесами, и периодически сталкиваются с чудовищными насекомообразными монстрами.',
    rating: 8.1,
};
