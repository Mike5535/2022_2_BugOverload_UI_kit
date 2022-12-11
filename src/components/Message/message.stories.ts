import { MessageUI } from '@components/Message/message'

export default {
    title: 'MessageUI',
    component: MessageUI,
};

export const Success = (args:any) => {
    return MessageUI.renderTemplateSuccess(args);
};

export const Error = (args:any) => {
    return MessageUI.renderTemplateError(args);
};

Success.args = {
    text: 'Ты потрясающий!',
};

Error.args = {
    text: 'Одна ошибка и вы ошиблись',
};

