export const template =`
    {{> arrowBack}}
    
    <div class="profile_main">
        <div class="profile">
            <div class="profile_avatar">
                {{#if avatar}}
                    <span></span>
                {{else}}
                    <span></span>
                {{/if}}
            </div>
            <div class="profile_name">Иван</div>
            <div class="profile_data">
                <div class="profile_line">
                    <div class="name_field">Почта</div>
                    <div class="value_field">{{email}}</div>
                </div>
                <div class="profile_line">
                    <div class="name_field">Логин</div>
                    <div class="value_field">{{login}}</div>
                </div>
                <div class="profile_line">
                    <div class="name_field">Имя</div>
                    <div class="value_field">{{name}}</div>
                </div>
                <div class="profile_line">
                    <div class="name_field">Фамилия</div>
                    <div class="value_field">{{surname}}</div>
                </div>
                <div class="profile_line">
                    <div class="name_field">Имя в чате</div>
                    <div class="value_field">{{nickname}}</div>
                </div>
                <div class="profile_line">
                    <div class="name_field">Телефон</div>
                    <div class="value_field">{{phone}}</div>
                </div>
            </div>
            <div class="change_data">
                <div class="profile_line">
                    <a href="profileEdit.html">Изменить данные</a>
                </div>
                <div class="profile_line">
                    <a href="profileEditPass.html">Изменить пароль</a>
                </div>
                <div class="profile_line">
                    <a href="chat.html" class="go_out">Выйти</a>
                </div>
            </div>
        </div>
    </div>
`;

export const dataProfile = {
    avatar: '',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    name: 'Иван',
    surname: 'Иванов',
    nickname: 'Иван',
    placeholder: '&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;'
};
