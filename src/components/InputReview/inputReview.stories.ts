import { InputReviewUI } from '@components/InputReview/inputReview'

export default {
    title: 'InputReviewUI',
    component: InputReviewUI,
};

export const Default = (args:any) => {
    return InputReviewUI.renderTemplate(args);
};

Default.args = {
    count_reviews: '5 рецензий',
    nickname: 'Сам Гослинг',
    user_avatar: 'https://i.pinimg.com/170x/90/7a/7a/907a7a415bc6bebb6a79224b7c7ad4ed.jpg',
};
