import { PersonMedUI } from '@components/PersonMed/personMed'

export default {
    title: 'PersonMedUI',
    component: PersonMedUI,
};

export const Default = (args:any) => {
    return PersonMedUI.renderTemplate(args);
};

Default.args = {
    props: {},
};
