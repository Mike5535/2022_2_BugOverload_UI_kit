import { SignupUI } from '@components/Signup/signup'
import { ModalUI } from '@components/Modal/modal'

export default {
    title: 'SignupUI',
    component: SignupUI,
};

export const Default = (args:any) => {
    return ModalUI.renderTemplate(
        { body: SignupUI.renderTemplate(args)}
    );
};

Default.args = {
    props: {},
};
