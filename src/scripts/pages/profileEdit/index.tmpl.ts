export const template =`
    {{> arrowBack}}
    
    <div class="profile_main">
        <div class="profile">
            <form action="" method="post" data-type="formProfileEdit">
                <div class="profile_avatar">
                    <span class="popup__edit_avatar" data-popup="popup__edit_avatar">
                        <div class="avatar_edit"><p>Поменять <br> аватар</p></div>
                    </span>
                </div>
                <div class="profile_data">
                
                     {{#each profileEdit}}
                         <div class="profile_line">
                            <div class="name_field">{{title}}</div>
                            <div class="value_field">
                                <input type={{type}} name={{name}} placeholder={{placeholder}} />
                            </div>
                        </div>
                    {{/each}}

                </div>
                <div class="profile_btn">
                    {{> button}}
                </div>
            </form>
        </div>
    </div>
    
    <div class="popup hidden" id="popup__edit_avatar">
        <div class="popup_main">
            <div class="popup_title">Загрузите файл</div>
            <div class="popup_cont">
                <form action="" method="post" class="order_form" data-type="formProfileEditAvatar">
                    <div class="popup_cont_line">
                        <input id="file-input" type="file" name="file" accept=".jpg, .jpeg, .png">
                        <div class="file-input_text hidden"></div>
                        <label for="file-input">Выбрать файл на <br>компьютере</label>
                    </div>
                    <button type="submit" class="btn">Поменять</button>
                    <div class="text_error hidden">Нужно выбрать файл</div>
                </form>
            </div>
        </div>
    </div>
`;

export const dataProfile = {
    profileEdit: {
        email: {
            title: 'Почта',
            name: 'email',
            type: 'email',
            placeholder: 'pochta@yandex.ru'
        },
        login: {
            title: 'Логин',
            name: 'login',
            type: 'text',
            placeholder: 'ivanivanov'
        },
        first_name: {
            title: 'Имя',
            name: 'first_name',
            type: 'text',
            placeholder: 'Иван'
        },
        second_name: {
            title: 'Фамилия',
            name: 'second_name',
            type: 'text',
            placeholder: 'Иванов'
        },
        chat_name: {
            title: 'Имя в чате',
            name: 'chat_name',
            type: 'text',
            placeholder: 'Иван'
        },
        phone: {
            title: 'Телефон',
            name: 'phone',
            type: 'tel',
            placeholder: '+7(909)9673030'
        },
    }
};
