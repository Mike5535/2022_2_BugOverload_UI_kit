import { HeaderUI } from '@components/Header/header'

export default {
    title: 'HeaderUI',
    component: HeaderUI,
};

export const Default = (args:any) => {
    return new HeaderUI(args).renderTemplate({});
};

Default.args = {
    props: {},
};
