import { template, data } from './index.tmpl';
import ChatСontacts, {dataСontacts} from '../../../components/chatСontacts/chatСontacts';
import Messages, {dataMessages} from '../../../components/messages/messages';
import Popup, {dataPopup} from '../../../components/popups/popups';

const app = document.querySelector('.app');


const chatСontacts = new ChatСontacts(dataСontacts);
if (chatСontacts.element){
    Handlebars.registerPartial('chatСontacts', chatСontacts.element.innerHTML);
}

const messages = new Messages(dataMessages);
if (messages.element){
    Handlebars.registerPartial('messages', messages.element.innerHTML);
}

// TODO Как закинуть в popups модуль кнопки ?
const popups = new Popup(dataPopup);
if (popups.element){
    Handlebars.registerPartial('popups', popups.element.innerHTML);
}


if (app){
    app.innerHTML = Handlebars.compile(template)(data);
}
