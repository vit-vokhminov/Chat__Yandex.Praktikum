type Callback = (...args: any[]) => void;
type ListenersList = Record<string, Callback[]>;

interface IEventBus {
    on(event: string, callback: Callback): void;

    off(event: string, callback: Callback): void;

    debugOn(): void;

    debugOff(): void;
}

export default class EventBus implements IEventBus {
    protected _listeners: ListenersList = {};
    protected _debugMode = false;
    protected _strictMode = false;

    constructor() {
        this._listeners = {};
        this.logger('New EventBus instance created');
    }

    on(event: string, callback: Callback) {
        if (!this._listeners[event]) {
            this._listeners[event] = [];
        }
        this._listeners[event].push(callback);
        this.logger(`Event subscription (${event})`);
    }

    off(event: string, callback: () => void) {
        this.checkEventExistence(event);
        this._listeners[event] = this._listeners[event].filter(listener => listener !== callback);
        this.logger(`Event unsubscription (${event})`);
    }

    emit(event: string, ...args: any) {
        this.logger(`Event emitting initiated (${event})`);
        if (!this.checkEventExistence(event)) {
            return;
        }
        this._listeners[event].forEach(listener => listener(...args));
    }

    debugOn() {
        this._debugMode = true;
    }

    debugOff() {
        this._debugMode = false;
    }

    protected logger(msg: string) {
        if (this._debugMode) {
            console.log(`${this.constructor.name}: ${msg}`);
        }
    }

    protected checkEventExistence(event: string): boolean | never {
        if (!this._listeners[event]) {
            if (this._strictMode) {
                throw new Error(`Event listeners not found: ${event}`);
            } else {
                return false;
            }
        }
        return true;
    }
}
