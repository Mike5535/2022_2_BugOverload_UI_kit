import { UserbarUI } from '@components/Userbar/userbar'

export default {
    title: 'UserbarUI',
    component: UserbarUI,
};

export const Default = (args:any) => {
    return UserbarUI.renderTemplate(args);
};

Default.args = {
    props: {},
};
