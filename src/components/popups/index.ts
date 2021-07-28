import Block from "Core/Block";
import {template} from "./index.tmpl";

export default class Popup extends Block {
    constructor(props: object) {
        super(props);
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }
}

export const dataPopup = {
    popups: {
        popupAddUser: {
            id: 'popup__add_user',
            title: 'Добавить пользователя',
            inputName: 'login',
            inputType: 'text',
            placeholder: 'Логин',
            textButton: 'Добавить'
        },
        popupDeleteUser: {
            id: 'popup__delete_user',
            title: 'Удалить пользователя',
            inputName: 'login',
            inputType: 'text',
            placeholder: 'Логин',
            textButton: 'Удалить'
        }
    }
};
