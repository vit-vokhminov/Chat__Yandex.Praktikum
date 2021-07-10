import { Block } from "../../scripts/core/Block";

export default class Messages extends Block {
    constructor(props: object) {
        super('chatMessages', props);
    }

    render() {
        return `
            <div class="chat_messages_main">
                <div class="chat_messages_content">
                    {{#each chat}}
                        <div class="field_messages">
                        
                            <div class="feed_messages__day">
                                <span>{{day}}</span>
                            </div>
                            
                            {{#each messages}}
                                {{#if interlocutor}}
                                    <div class="message_list its_messages">
                                        <div class="message__time">{{time}}</div>
                                        <div class="message">
                                            {{#each text}}
                                               <p>{{this}}</p>
                                            {{/each}}
                                        </div>
                                    </div>
                                {{else}}
                                    <div class="message_list my_messages">
                                        <div class="message__time">{{time}}</div>
                                        {{#if read}}
                                            <div class="message__readit">
                                                <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>
                                                    <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>
                                                    <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5.00006)" stroke="#3369F3"/>
                                                </svg>
                                            </div>
                                        {{else}}
                                            <div class="message__delivered">
                                                <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>
                                                    <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>
                                                </svg>
                                            </div>
                                        {{/if}}
                                        <div class="message">
                                            <p>{{text}}</p>
                                        </div>
                                    </div>
                                {{/if}}
                            {{/each}}
                        
                        </div>
                    {{/each}}
                </div>
            </div>
        `;
    }
}


export const dataMessages = {
    chat: [
        {
            day:  '19 июня',
            messages: [
                {
                    time: '11:56',
                    interlocutor: true,
                    text: [
                        'Привет!'
                    ],
                    read: true,
                },
                {
                    time: '12:04',
                    interlocutor: true,
                    text: [
                        'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
                        'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.'
                    ],
                    read: true,
                },
                {
                    time: '12:10',
                    interlocutor: false,
                    text: [
                        'Круто!'
                    ],
                    read: true,
                },
                {
                    time: '14:00',
                    interlocutor: false,
                    text: [
                        'Круто!'
                    ],
                    read: false,
                }
            ]
        }
    ]
};
