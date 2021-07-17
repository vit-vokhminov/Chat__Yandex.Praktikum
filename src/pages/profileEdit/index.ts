import {template} from "./index.tmpl";
import Block from "../../core/Block";
import Button from "../../components/button/index";
import Index from '../../components/arrowBack/index';
import FormValidator from "../../core/FormValidator";

import {loginValidationRules as checks, storeMap} from "../../config";
import controller from "./controller";


const validator = new FormValidator(checks);
validator.setDataHandler(controller.changeProfileInfo.bind(controller));

export default class Profile extends Block {
    constructor(props: any) {

        const arrowBack = new Index({});
        if (arrowBack.element) {
            Handlebars.registerPartial('arrowBack', arrowBack.element.innerHTML);
        }

        const saveButton = new Button({text: 'Сохранить', type: 'submit'});
        if (saveButton.element)
            Handlebars.registerPartial('saveButton', saveButton.element.innerHTML);

        const changeButton = new Button({text: 'Поменять', type: 'submit'});
        if (changeButton.element)
            Handlebars.registerPartial('changeButton', changeButton.element.innerHTML);

        super(props, storeMap.profilePageProps);
        this.element.addEventListener('click', e => this.clickHandler(e));
        this.element.addEventListener('change', e => this.clickInputFile(e));
    }

    componentDidMount() {
        const avatarForm = this.element.querySelector('.avatar-form');
        if (avatarForm) {
            avatarForm.addEventListener('submit', e => this.avatarFormHandler(e));
        }
    }

    componentDidUpdate() {
        validator.detach();
        const avatarForm = this.element.querySelector('.avatar-form');
        if (avatarForm)
            avatarForm.removeEventListener('submit', this.avatarFormHandler);
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }

    render() {
        if (this.element)
            validator.attach(this.element, '.profile-form')
    }

    clickInputFile(event: Event){
        const target = event.target as HTMLElement;
        // Добавление названия загруженного файла в попап profile_avatar_block
        if (target.classList.contains('file-input-avatar')) {
            const input = this.element.querySelector(`#file-input-avatar`);
            const elemText = this.element.querySelector(`.file_text`);
            const label = this.element.querySelector(`#label-file-text`);
            if (input && elemText && label) {
                //@ts-ignore
                const fileText = event.target.files[0].name;
                elemText.textContent = fileText;

                elemText.classList.remove('hidden');
                label.classList.add('hidden');
            }
            return;
        }
    }

    clickHandler(event: Event) {
        const target = event.target as HTMLElement;
        if (target.closest('.go-chat-link')) {
            return controller.back();
        }
        // Открытие попапа profile_avatar_block
        if (target.closest('.profile_avatar_block')) {
            const popup = this.element.querySelector(`#popup__edit_avatar`);
            if (popup) {
                popup.classList.toggle('hidden');
            }
            return;
        }
        // Закрытие попапа profile_avatar_block
        if (!target.closest('.popup_main')) {
            const popup = this.element.querySelector(`#popup__edit_avatar`);
            if (popup) {
                popup.classList.add('hidden');
            }
            return;
        }
    }

    avatarFormHandler(event: Event) {
        event.preventDefault();
        const target = event.target as HTMLFormElement;
        let formData = new FormData(target);
        controller.changeProfileAvatar(formData);
    }

}

