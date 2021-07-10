import {template} from './index.tmpl';
import Block from "../../core/Block";
import Button from "../../components/button/index";
import FormValidator from "../../core/FormValidator";
import {passwordValidationRules as checks, storeMap} from "../../config";
import controller from "./controller";
import Index from "../../components/arrowBack/index";

const validator = new FormValidator(checks);
validator.setDataHandler(controller.changeProfilePassword.bind(controller));

export default class ProfileEditPass extends Block {
    constructor(props: any) {
        const arrowBack = new Index({});
        if (arrowBack.element) {
            Handlebars.registerPartial('arrowBack', arrowBack.element.innerHTML);
        }
        const button = new Button({
            text: 'Сохранить',
            type: 'submit'
        });
        if (button.element)
            Handlebars.registerPartial('button', button.element.innerHTML);
        super(props, storeMap.profilePageProps);
        this.element.addEventListener('click', e => this.clickHandler(e));
    }

    componentDidUpdate() {
        validator.detach();
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }

    render() {
        if (this.element)
            validator.attach(this.element, '.profile-form')
    }

    clickHandler(event: Event) {
        const target = event.target as HTMLElement;
        if (target.closest('.go-chat-link'))
            controller.back();
    }
}
