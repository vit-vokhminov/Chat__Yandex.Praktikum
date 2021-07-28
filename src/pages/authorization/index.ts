import {template} from './index.tmpl';
import controller from "./controller";
import Block from "Core/Block";
import FormValidator from "Core/FormValidator";
import Button from "Components/button/index";
import {Routes} from "Src/index";
import {loginValidationRules as checks} from "Src/config";

const validator = new FormValidator(checks);
validator.setDataHandler(controller.signIn.bind(controller));

export default class Authorization extends Block {

    constructor(props: any) {
        const button = new Button({
            text: 'Авторизоваться',
            type: 'submit'
        });
        if (button.element)
            Handlebars.registerPartial('button', button.element.innerHTML);
        super(props);
        this.element.addEventListener('click', e => this.clickHandler(e));
    }

    render() {
        if (this.element) {
            validator.attach(this.element, "form")
        }
    }

    componentDidMount() {
        controller.checkAuth();
    }

    componentDidUpdate() {
        validator.detach();
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }

    clickHandler(event: Event) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('link-registration'))
            controller.go(Routes.signup);
    }

}
