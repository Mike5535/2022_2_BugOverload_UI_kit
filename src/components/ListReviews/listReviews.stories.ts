import { ListReviewsUI } from '@components/ListReviews/listReviews'
import { ReviewUI } from '@components/Review/review'

export default {
    title: 'ListReviewsUI',
    component: ListReviewsUI,
};

export const Default = (args:any) => {
    return ListReviewsUI.renderTemplate(args);
};

const reviewsData = [{
    author: {
        id: 12,
        nickname: 'Виталий Царь',
        avatar: 'https://d16u9y6cg00afk.cloudfront.net/papichhhh/14962.512.webp',
    },
    countReviews: '12 рецензий',
    type: 'neutral',
    date: '12.02.2021',
    name: 'Моё очень важное мнение (единственно правильное)',
    body: 'Моя оценка 5.5 фениксов из 10. Рекомендую всем фанатам этого актера, ибо абсолютно весь хронометраж фильма это исключительно он и только он. Больше ничего там увидеть невозможно. Ибо больше там ничего и нет.'
},
{
    author: {
        id: 12,
        nickname: 'Виталий Царь',
        avatar: 'https://d16u9y6cg00afk.cloudfront.net/papichhhh/14962.512.webp',
    },
    countReviews: '12 рецензий',
    date: '12.02.2021',
    type: 'positive',
    name: 'Моё очень важное мнение (единственно правильное)',
    body: 'Моя оценка 5.5 фениксов из 10. Рекомендую всем фанатам этого актера, ибо абсолютно весь хронометраж фильма это исключительно он и только он. Больше ничего там увидеть невозможно. Ибо больше там ничего и нет.'
},
{
    author: {
        id: 12,
        nickname: 'Виталий Царь',
        avatar: 'https://d16u9y6cg00afk.cloudfront.net/papichhhh/14962.512.webp',
    },
    countReviews: '12 рецензий',
    date: '12.02.2021',
    type: 'negative',
    name: 'Моё очень важное мнение (единственно правильное)',
    body: 'Моя оценка 5.5 фениксов из 10. Рекомендую всем фанатам этого актера, ибо абсолютно весь хронометраж фильма это исключительно он и только он. Больше ничего там увидеть невозможно. Ибо больше там ничего и нет.'
},
{
    author: {
        id: 12,
        nickname: 'Виталий Царь',
        avatar: 'https://d16u9y6cg00afk.cloudfront.net/papichhhh/14962.512.webp',
    },
    countReviews: '12 рецензий',
    date: '12.02.2021',
    type: 'neutral',
    name: 'Моё очень важное мнение (единственно правильное)',
    body: 'Моя оценка 5.5 фениксов из 10. Рекомендую всем фанатам этого актера, ибо абсолютно весь хронометраж фильма это исключительно он и только он. Больше ничего там увидеть невозможно. Ибо больше там ничего и нет.'
}];

Default.args = {
    reviews: reviewsData.reduce((res: string, reviewData: any) => res + ReviewUI.renderTemplate(reviewData), ''),
};
