export const template =`
    <div class="list_chat_main">

        <div class="sidebar_chat">

            <div class="sidebar_chat_top">

                <div class="bt_profile">Профиль <img src="../img/icon/arrow_right.svg" alt=""></div>
                
                <form action="" method="post" data-type="formChatSearch">
                    <label class="label_inp_search">
                        <input type="text" name="search" placeholder="Поиск" class="inp_search">
                    </label>
                </form>
                
            </div>

            {{> chatСontacts}}

        </div>

        <div class="cont_messages">
            <!--<div class="not_selected_messages">
                <p>Выберите чат чтобы отправить сообщение</p>
            </div>-->
            <div class="chat_messages">

                <div class="chat_messages_top">
                    <div class="messages_profile">
                        <div class="messages_profile__avatar"></div>
                        <div class="messages_profile__data">
                            <h4>Вадим</h4>
                        </div>
                    </div>
                    <div class="messages_profile_option">
                        <div class="option_bt"></div>
                        <div class="balloon profile_option_balloon">
                            <div class="balloon_line add_user" data-popup="popup__add_user">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
                                    <line x1="10.99988" y1="5.5" x2="10.99988" y2="16.5" stroke="#3369F3" stroke-width="1.5"/>
                                    <line x1="5.499878" y1="11" x2="16.4999" y2="11" stroke="#3369F3" stroke-width="1.5"/>
                                </svg>
                                <p>Добавить пользователя</p>
                            </div>
                            <div class="balloon_line delete_user" data-popup="popup__delete_user">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
                                    <line x1="7.11077" y1="7.11103" x2="14.8889" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
                                    <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
                                </svg>
                                <p>Удалить пользователя</p>
                            </div>
                        </div>
                    </div>
                </div>

                {{> messages}}

                <div class="chat_messages_bottom">
                    <form action="" method="post" data-type="formChatMessage">
                        <div class="attach">
                            <div class="attach_bt"></div>
                            <div class="balloon attach_option_balloon">
                                <div class="balloon_line photo_video">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#3369F3"/>
                                    </svg>
                                    <p>Фото или Видео</p>
                                </div>
                                <div class="balloon_line file_">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V12H16C13.7909 12 12 13.7909 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61929 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V12V18C22 20.2091 20.2091 22 18 22H12Z" fill="#3369F3"/>
                                    </svg>
                                    <p>Файл</p>
                                </div>
                                <div class="balloon_line location_">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" fill="#3369F3"/>
                                    </svg>
                                    <p>Локация</p>
                                </div>
                            </div>
                        </div>
                        <div class="inp_message_main">
                            <input type="text" name="inp_message" class="inp_message" placeholder="Сообщение">
                        </div>
                        <div class="send_message">
                            <button type="submit" class="send_message_bt"><span></span></button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    </div>
    {{> popups}}
`;

export const data = {
    authorization: {
        login: {
            name: 'login',
            type: 'text',
            placeholder: 'Логин'
        },
        password: {
            name: 'password',
            type: 'password',
            placeholder: 'Пароль'
        }
    }
};
