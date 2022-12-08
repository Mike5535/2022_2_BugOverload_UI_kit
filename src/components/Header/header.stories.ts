import { Header } from '@components/Header/header'

export default {
    title: 'Header',
    component: Header,
};

export const Default = (args:any) => {
    return new Header(args).render();
};

Default.args = {
    props: {
        id: 1,
        artwork:
            'https://lostpointer.site/static/playlists/default_playlist_artwork_100px.webp',
        title: 'Playlist 1',
        is_public: true,
    },
};