import {template} from "./index.tmpl";
import controller from "./controller";
import Block from "Core/Block";
import FormValidator from "Core/FormValidator";
import Button from "Components/button/index";
import {Routes} from "Src/index";
import {profileValidationRules as checks} from "Src/config";

const validator = new FormValidator(checks);
validator.setDataHandler(controller.signUp.bind(controller));

export default class Registration extends Block {

    constructor(props: any) {
        const button = new Button({
            text: 'Зарегистрироваться',
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

    componentDidUpdate() {
        validator.detach();
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }

    clickHandler(event: Event) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('link-authorization')) {
            controller.go(Routes.login);
        }

    }

}
