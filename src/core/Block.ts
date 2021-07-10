import EventBus from './EventBus';
import Store from './Store';
import {merge} from '../utilities/objectHandlers';

type Property = Record<string, any>;

interface Meta {
    tagName: string;
    props: Property;
    storePath: string | null;
}

const store = new Store();

export default class Block {
    static EVENTS = {
        INIT: 'init',                                   // Завершена работа конструктора
        FLOW_CDM: 'flow:component-did-mount',           // Завершена инициализация
        FLOW_CDU: 'flow:component-did-update',          // Обновлены параметры компонента
        FLOW_CWU: 'flow:component-will-unmount',        // Компонент демонтирован
        FLOW_RENDER: 'flow:render',                      // Выполнена сборка компонента
    };

    private readonly _meta: Meta;
    private readonly _props: object;
    private _element: HTMLElement;
    protected _parentNode: HTMLElement | null = null;
    public eventBus: EventBus;


    /** JSDoc
     * @props {pbject} компоненты переданные пропсом, например параметры Button {text: "Авторизоваться"; type: "submit}
     * @store {string} стора обыкновенная
     * @tagName {HTMLElement}
     */
    constructor(props = {}, storePath: string | null = null, tagName = 'div') {
        this._meta = {tagName, props, storePath};
        this._props = this._makePropsProxy(props);
        this.eventBus = new EventBus();
        this._registerEvents();
        this.eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents() {
        this.eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CDM, this.componentDidMount.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CWU, this.componentDidUnmount.bind(this));
    }

    /** JSDoc
     * @props {pbject} компоненты переданные пропсом, например параметры Button {text: "Авторизоваться"; type: "submit}
     * @store {string} стора обыкновенная
     * @tagName {HTMLElement}
     */
    _init() {
        this._createResources();
        this.eventBus.emit(Block.EVENTS.FLOW_CDU);

        if (this._meta.storePath) {
            store.eventBus.on(this._meta.storePath, () => this.eventBus.emit(Block.EVENTS.FLOW_RENDER));
        }
        this.eventBus.emit(Block.EVENTS.FLOW_CDU);
    }

    init() {
        return;
    }

    _createResources() {
        const {tagName} = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    _componentDidMount(parentNode: HTMLElement): void {
        if (this._parentNode) {
            throw new Error(`${this.constructor.name}: Component is already mounted`);
        }
        parentNode.appendChild(this._element);
        this.componentDidMount();
        this._parentNode = parentNode;
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount() {
    }

    _componentDidUnmount(): void {
        if (!this._parentNode) {
            return;
        }
        this._parentNode.removeChild(this._element);
        this._parentNode = null;
        this.componentDidUnmount();
        this.eventBus.emit(Block.EVENTS.FLOW_CWU);
    }

    componentDidUnmount() {
    }

    _componentDidUpdate() {
        this.componentDidUpdate();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidUpdate() {
    }

    _render() {
        if (this._meta.storePath) {
            merge(this._meta.props, store.get(this._meta.storePath));
        }
        const block = this.compile(this._meta.props);
        if (this._element) {
            this._element.innerHTML = block;
        }
    }

    render() {
    }

    compile(context: any) {
        return context;
    }

    bindParent(parent: Block) {
        if (this._meta.storePath) {
            store.eventBus.on(this._meta.storePath, () => parent.eventBus.emit(Block.EVENTS.FLOW_RENDER));
        }
    }

    setProps = (nextProps: object) => {
        if (!nextProps) {
            return;
        }
        Object.assign(this._props, nextProps);
    };

    public get element() {
        return this._element;
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: object) {
        const self = this;
        return new Proxy(props, {
            set(target: any, prop: any, val) {
                target[prop] = val;
                self.eventBus.emit(Block.EVENTS.FLOW_RENDER);
                return true;
            },
            deleteProperty() {
                throw new Error("нет доступа");
            }
        });
    }

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    show() {
        const element = this.element;
        if (element) {
            element.style.display = "block";
        }
    }

    hide() {
        const element = this.element;
        if (element) {
            element.style.display = "none";
        }
    }
}
