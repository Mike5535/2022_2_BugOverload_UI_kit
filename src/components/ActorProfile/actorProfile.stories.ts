import { ActorProfileUI } from '@components/ActorProfile/actorProfile'

export default {
    title: 'ActorProfileUI',
    component: ActorProfileUI,
};

export const Default = (args:any) => {
    return  ActorProfileUI.renderTemplate(args);
};

Default.args = {
    props: {},
};
