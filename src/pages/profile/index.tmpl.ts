export const template = `
    {{> arrowBack}}
    
    <div class="profile_main">
        <div class="profile">
            <div class="profile_avatar">
                <div class="profile_avatar_block">
                    {{#if avatar}}
                        <img class="avatar__image" src={{avatar}} alt="Аватар профиля">
                    {{else}}
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 2ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z" fill="#CDCDCD"/>
                        </svg>
                    {{/if}}
                </div>
            </div>
            <div class="profile_name">{{first_name}}</div>
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
                    <div class="value_field">{{first_name}}</div>
                </div>
                <div class="profile_line">
                    <div class="name_field">Фамилия</div>
                    <div class="value_field">{{second_name}}</div>
                </div>
                <div class="profile_line">
                    <div class="name_field">Имя в чате</div>
                    <div class="value_field">{{display_name}}</div>
                </div>
                <div class="profile_line">
                    <div class="name_field">Телефон</div>
                    <div class="value_field">{{phone}}</div>
                </div>
            </div>
            <div class="change_data">
                <div class="profile_line">
                    <a class="edit-profile-link">Изменить данные</a>
                </div>
                <div class="profile_line">
                    <a class="edit-password-link">Изменить пароль</a>
                </div>
                <div class="profile_line">
                    <a class="go_out logout-link">Выйти</a>
                </div>
            </div>
        </div>
    </div>
`;
