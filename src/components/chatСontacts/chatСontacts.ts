import { Block } from "../../scripts/core/Block";

export default class ChatСontacts extends Block {
    constructor(props: object) {
        super('chatСontacts', props);
    }

    render() {
        return `
            <div class="list_chat__contacts">
                {{#each contacts}}
                    <div class="list_chat_line">
                        <div class="list_chat_line__avatar">{{avatar}}</div>
                        <div class="list_chat_line__data">
                        
                            <h4>{{name}}</h4>
                            
                            {{#if lastMessage.me}}
                                <p><span>Вы:</span> {{lastMessage.me}}</p>
                            {{else}}
                                <p>{{lastMessage.comrade}}</p>
                            {{/if}}
                            
                            <div class="time">{{time}}</div>
                            
                            {{#if colMessages}}
                                <div class="col_messages">{{colMessages}}</div>
                            {{/if}}
                        </div>
                    </div>
                {{/each}}
            </div>
        `;
    }
}


export const dataСontacts = {
    contacts: {
        1: {
            avatar: '',
            name: 'Андрей',
            lastMessage: {
                comrade: 'Изображение'
            },
            time: '10:49',
            colMessages: 2
        },
        2: {
            avatar: '',
            name: 'Киноклуб',
            lastMessage: {
                me: 'стикер'
            },
            time: '12:00'
        },
        3: {
            avatar: '',
            name: 'Илья',
            lastMessage: {
                comrade: 'Друзья, у меня для вас особенный выпуск новостей!...'
            },
            time: '15:12',
            colMessages: 2
        },
        4: {
            avatar: '',
            name: 'Вадим',
            lastMessage: {
                me: 'Круто!'
            },
            time: 'Пт'
        },

    }
};
