import { HeaderUI } from '@components/Header/header'

export default {
    title: 'HeaderUI',
    component: HeaderUI,
};

export const Default = (args:any) => {
    return HeaderUI.renderTemplate(args);
};

export const Mobile = (args:any) => {
    return HeaderUI.renderTemplate(args);
};

Default.args = {
    props: {},
};

Mobile.args = {
    isMobile: true,
}
