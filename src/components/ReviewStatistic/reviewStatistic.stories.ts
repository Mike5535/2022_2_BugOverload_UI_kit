import { ReviewStatisticUI } from '@components/ReviewStatistic/reviewStatistic'

export default {
    title: 'MenuInfoFilmUI',
    component: ReviewStatisticUI,
};

export const Default = (args:any) => {
    return ReviewStatisticUI.renderTemplate(args);
};

Default.args = {
    total: 122 + 64 + 25,
    negative: 25,
    neutral: 64,
    positive: 122,
};
