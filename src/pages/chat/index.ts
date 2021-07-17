import { template } from "./index.tmpl";
import Block from "../../core/Block";
import Index, {dataMessages} from '../../components/messages/index';
import Button from "../../components/button/index";
import controller from "./controller";
import {Routes} from "../../index";
import FormValidator from "../../core/FormValidator";
import {chatNameValidationRules, loginValidationRules, storeMap} from "../../config";

const newChatValidator = new FormValidator(chatNameValidationRules);
const addUserValidator = new FormValidator(loginValidationRules);
const removeUserValidator = new FormValidator(loginValidationRules);

newChatValidator.setDataHandler(controller.createChat.bind(controller));
addUserValidator.setDataHandler(controller.addUser.bind(controller));
removeUserValidator.setDataHandler(controller.removeUser.bind(controller));

export default class Chat extends Block {
    constructor(props: any) {

        const messages: any = new Index(dataMessages);
        const addChatButton = new Button({text: 'Создать чат', type: 'submit'});
        const addUserButton = new Button({text: 'Добавить', type: 'submit'});
        const removeUserButton = new Button({text: 'Удалить', type: 'submit'});

        if (messages.element){
            Handlebars.registerPartial('messages', messages.element.innerHTML);
        }
        if (addChatButton.element){
            Handlebars.registerPartial('addChatButton', addChatButton.element.innerHTML);
        }
        if (addUserButton.element){
            Handlebars.registerPartial('addUserButton', addUserButton.element.innerHTML);
        }
        if (removeUserButton.element){
            Handlebars.registerPartial('removeUserButton', removeUserButton.element.innerHTML);
        }
        super(props, storeMap.chatsList);
        this.element.addEventListener('click', e => this.clickHandler(e));
    }

    componentDidUpdate() {
        newChatValidator.detach();
        addUserValidator.detach();
        removeUserValidator.detach();
    }

    componentDidMount() {
        controller.updateChats();
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }

    render() {
        if (this.element) {
            newChatValidator.attach(this.element, '.add-chat-form');
            addUserValidator.attach(this.element, '.add-user-form');
            removeUserValidator.attach(this.element, '.remove-user-form');
        }
    }

    clickHandler(event: Event) {
        const target = event.target as HTMLElement;
        if(target.classList.contains('go-profile-link')){
            return controller.go(Routes.profile);
        }
        // Выбор чата
        const chatListItem = target.closest('.list_chat_line');
        if (chatListItem)
            this.chatSelectHandler(chatListItem as HTMLElement);
        // Открытие балуна с Добавлением и Удалениес пользователя
        if(target.classList.contains('option_bt')) {
            const balloon = this.element.querySelector(`.profile_option_balloon`);
            if (balloon){
                balloon.classList.toggle('balloon_show');
            }
            return;
        }
        // Скрытие балуна с Добавлением и Удалениес пользователя
        if(target.classList.contains('attach_bt')) {
            const balloon = this.element.querySelector(`.attach_option_balloon`);
            if (balloon){
                balloon.classList.toggle('balloon_show');
            }
            return;
        }
        // Открытие попапа Добавить чат
        if (target.classList.contains('add-chat-button')) {
            const popup = this.element.querySelector(`#popup__add_chat`);
            if (popup){
                popup.classList.toggle('hidden');
            }
            return;
        }
        // Открытие попапа Добавить пользователя
        if (target.classList.contains('add_user')) {
            const popup = this.element.querySelector(`#popup__add_user`);
            if (popup){
                popup.classList.toggle('hidden');
            }
            return;
        }
        // Открытие попапа Удалить пользователя
        if (target.classList.contains('delete_user')) {
            const popup = this.element.querySelector(`#popup__delete_user`);
            if (popup){
                popup.classList.toggle('hidden');
            }
            return;
        }
        // Закрытие попапа Добавить или Удалить пользователя
        if (!target.closest('.popup_main')) {
            const popups = this.element.querySelectorAll(`.popup`);
            if (popups){
                for(let i = 0; i < popups.length; i++){
                    popups[i].classList.add('hidden');
                }
            }
            return;
        }
    }

    // Обработчик событий выбора чата
    chatSelectHandler(chatListItem: HTMLElement) {
        // Если чат уже активен - выходим
        if (chatListItem.classList.contains('list_chat_line_active'))
            return;

        const chatID = chatListItem.dataset.id;
        if (chatID){
            controller.storeSet(storeMap.activeChatID, parseInt(chatID));
        }

        const chatList = chatListItem.closest('.list_chat__contacts');
        let activeChat = null;

        if (chatList) {
            activeChat = chatList.querySelector('.list_chat_line_active');
            if (activeChat){
                activeChat.classList.remove('list_chat_line_active');
            }
        }

        chatListItem.classList.add('list_chat_line_active');
        const chatPlaceholder = this.element.querySelector('.no-chat-selected');

        if (chatPlaceholder){
            chatPlaceholder.classList.add('hidden');
        }

        const chat = this.element.querySelector('.chat_messages');
        if (chat){
            chat.classList.remove('hidden');
        }

    }

}
