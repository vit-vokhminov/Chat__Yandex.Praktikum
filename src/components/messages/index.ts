import Block from "../../core/Block";
import {template} from "./index.tmpl";

export default class Index extends Block {
    constructor(props: object) {
        super(props);
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }
}


export const dataMessages = {
    chat: [
        {
            day: '19 июня',
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
