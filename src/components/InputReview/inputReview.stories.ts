import { InputReviewUI } from '@components/InputReview/inputReview'

export default {
    title: 'InputReviewUI',
    component: InputReviewUI,
};

export const Default = (args:any) => {
    return InputReviewUI.renderTemplate(args);
};

Default.args = {};
