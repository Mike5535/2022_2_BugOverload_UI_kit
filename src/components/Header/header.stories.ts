import { Header } from '@components/Header/header'

export default {
    title: 'Header',
    component: Header,
};

export const Default = (args:any) => {
    return new Header(args).render({});
};

Default.args = {
    props: {},
};
