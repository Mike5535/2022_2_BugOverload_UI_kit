import { SaveToCollectionMenuUI } from '@components/SaveToCollectionMenu/saveToCollectionMenu'

export default {
    title: 'SaveToCollectionMenuUI',
    component: SaveToCollectionMenuUI,
};

export const Default = (args:any) => {
    return SaveToCollectionMenuUI.renderTemplate(args);
};

Default.args = {
    collections: [
        {
          'id': 123,
          'name': 'Буду смотреть'
        },
        {
            'id': 122,
            'is_used': true,
            'name': 'Избранное'
        },
        {
            'id': 121,
            'name': 'Под пивас'
        },
        {
            'id': 121,
            'is_used': true,
            'name': 'Годнота 100%'
        }

      ]
};

//{ collections: this.state.collections }
