import { GenreUI } from '@components/Genre/genre'

export default {
    title: 'GenreUI',
    component: GenreUI,
};

export const Default = (args:any) => {
    return  GenreUI.renderTemplate(args);
};

Default.args = {
    props: {},
};
