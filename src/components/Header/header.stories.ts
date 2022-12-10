import { HeaderUI } from '@components/Header/header'

export default {
    title: 'Header',
    component: HeaderUI,
};

export const Default = (args:any) => {
    return new HeaderUI(args).render({});
};

Default.args = {
    props: {},
};
