import {template} from './index.tmpl';
import ErrorBanner from '../../components/errorBanner/index';
import Component from '../../core/Block';
import {storeMap} from '../../config';
import Router from "../../core/Router";

type Partial = {
    name: string,
    component: Component
}

const partials: Partial[] = [];
const router = new Router();

export class ErrorPage extends Component {
    constructor(props: any) {
        const errorBanner = new ErrorBanner({
            type: 'Тип ошибки',
            description: 'Описание ошибки'
        }, storeMap.errorPageProps);
        partials.push({
            name: 'errorBanner',
            component: errorBanner
        });
        super(props);
        errorBanner.bindParent(this);
        this.element.addEventListener('click', e => this.clickHandler(e));
    }

    compile(context: any) {
        partials.forEach(partial => {
            if (partial.component.element) {
                Handlebars.registerPartial(partial.name, partial.component.element.innerHTML);
            }
        })
        return Handlebars.compile(template)(context);
    }

    clickHandler(event: Event) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('go-back-link')) {
            router.back();
        }
    }
}
