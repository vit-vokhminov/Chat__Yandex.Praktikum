import {template} from "./index.tmpl";
import controller from "./controller";
import Block from "Core/Block";
import Index from 'Components/arrowBack/index';
import {Routes} from "Src/index";
import {storeMap} from "Src/config";

export default class Profile extends Block {
    constructor(props: any) {

        const arrowBack = new Index({});
        if (arrowBack.element) {
            Handlebars.registerPartial('arrowBack', arrowBack.element.innerHTML);
        }
        super(props, storeMap.profilePageProps);
        this.element.addEventListener('click', e => this.clickHandler(e));
    }

    componentDidMount() {
        controller.updateUserInfo();
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }

    clickHandler(event: Event) {
        const target = event.target as HTMLElement;
        if (target.closest('.go-chat-link')) {
            return controller.go(Routes.chat);
        }
        if (target.closest('.edit-profile-link')) {
            return controller.go(Routes.profileEdit);
        }
        if (target.closest('.edit-password-link')) {
            return controller.go(Routes.profileEditPass)
        }
        if (target.closest('.logout-link')) {
            return controller.logout();
        }
    }

}

export const dataProfile = {
    avatar: '',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    name: 'Иван',
    surname: 'Иванов',
    nickname: 'Иван',
    placeholder: '&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;'
};
