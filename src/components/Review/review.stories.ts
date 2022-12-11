import { ReviewUI } from '@components/Review/review'

export default {
    title: 'ReviewUI',
    component: ReviewUI,
};

export const Default = (args:any) => {
    return ReviewUI.renderTemplate(args);
};

Default.args = {
    author: {
        id: 12,
        nickname: 'Виталий Царь',
        avatar: 'https://d16u9y6cg00afk.cloudfront.net/papichhhh/14962.512.webp',
    },
    countReviews: '12 рецензий',
    date: '12.02.2021',
    name: 'Моё очень важное мнение (единственно правильное)',
    body: 'Моя оценка 5.5 фениксов из 10. Рекомендую всем фанатам этого актера, ибо абсолютно весь хронометраж фильма это исключительно он и только он. Больше ничего там увидеть невозможно. Ибо больше там ничего и нет.'
};

