import Route from "./Route";
import Block from "./Block";

// Router отвечает только за изменение URL и вызывает Route;
export default class Router {

    static _instance: Router | null = null;

    private _rootSelector: string | null = null;
    private _routes: Route[] = [];
    private _history = window.history;
    private _currentRoute: Route | null = null;
    public badRouteHandler?: () => void;

    constructor(rootSelector: string | null = null) {
        // Реализована возможность создания экземпляра без инициализации
        if (Router._instance) {
            if (rootSelector && !Router._instance._rootSelector)
                Router._instance._rootSelector = rootSelector;
            return Router._instance;
        }
        this._rootSelector = rootSelector;
        Router._instance = this;
    }

    // Вспомогательный метод для проверки состояния инициализации корневого селектора
    _rootCheck() {
        if (!this._rootSelector) {
            throw new Error(`${this.constructor.name}: Instance exist, but root node selector not defined yet`);
        }
    }

    // Регистрация нового роута
    use(path: string, block: typeof Block, context: any) {
        this._rootCheck();
        const route = new Route(path, block, {rootQuery: this._rootSelector, ...context});
        this._routes.push(route);
        return this;
    }

    // запустить роутер
    start() {
        window.onpopstate = (event: any) => this._onRoute(event.currentTarget.location.pathname);
        this._onRoute(window.location.pathname);
    }

    // Обработчик изменения состояния
    _onRoute(path: string): void {
        const route = this.getRoute(path);

        // Если указанный роутер отсутствует
        if (!route) {
            if (this.badRouteHandler) {
                this.badRouteHandler();
            }
            return;
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }

    // Переход по указанному пути
    go(path: string) {
        this._history.pushState({}, "", path);
        this._onRoute(path);
    }

    // переход назад по истории браузера
    back() {
        this._history.back();
    }

    // переход вперёд по истории браузера
    forward() {
        this._history.forward();
    }

    // Получение сущности "Route" по заданному пути
    getRoute(path: string): Route | undefined {
        return this._routes.find(route => route.match(path));
    }
}
