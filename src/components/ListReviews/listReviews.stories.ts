import { ListReviewsUI } from '@components/ListReviews/listReviews'

export default {
    title: 'ListReviewsUI',
    component: ListReviewsUI,
};

export const Default = (args:any) => {
    return ListReviewsUI.renderTemplate(args);
};

Default.args = {
};
