import { LoginUI } from '@components/Login/login'
import { ModalUI } from '@components/Modal/modal'

export default {
    title: 'LoginUI',
    component: LoginUI,
};

export const Default = (args:any) => {
    return ModalUI.renderTemplate(
        { body: LoginUI.renderTemplate(args)}
    );
};

Default.args = {
    props: {},
};
