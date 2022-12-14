import { ProfileMenuUI } from '@components/ProfileMenu/profileMenu'

export default {
    title: 'ProfileMenuUI',
    component: ProfileMenuUI,
};

export const Default = (args:any) => {
    return ProfileMenuUI.renderTemplate(args);
};

Default.args = {
    props: {},
};
