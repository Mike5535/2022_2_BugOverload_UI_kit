export interface Component extends anyObject {
    props: anyObject;
}
export declare class Component {
    /**
     * Cохраняет переданные параметры props.
     * @param {Object} - необходимые для работы класса свойства
     * @default {Element} rootNode - div, через который происходит взаимодействие с html.
     */
    constructor(props: anyObject);
}
