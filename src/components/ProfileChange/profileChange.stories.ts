import { ProfileChangeUI } from '@components/ProfileChange/profileChange'

export default {
    title: 'ProfileChangeUI',
    component: ProfileChangeUI,
};

export const Default = (args:any) => {
    return ProfileChangeUI.renderTemplate(args);
};

Default.args = {
    props: {},
};
