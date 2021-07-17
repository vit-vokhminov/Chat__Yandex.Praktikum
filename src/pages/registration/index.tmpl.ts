export const template = `
    <div class="popup popup__log_system">
        <div class="popup_main">
            <div class="popup_title">Вход</div>
            <div class="popup_cont">
                <form class="order_form" data-type="formRegistration">
                    {{#each registration}}
                        <div class="popup_cont_line">
                            <input class="valid" name={{name}} type={{type}} placeholder={{placeholder}} />
                            {{#if error}}
                                <div class="text_error hidden">Пароли не совпадают</div>
                            {{/if}}
                        </div>
                    {{/each}}
                    {{> button}}
                </form>
                <div class="no_account">
                    <a class="link-authorization">Войти</a>
                </div>
            </div>
        </div>
    </div>
`;

export const dataRegistration = {
    registration: {
        email: {
            name: 'email',
            type: 'email',
            placeholder: 'Почта'
        },
        login: {
            name: 'login',
            type: 'text',
            placeholder: 'Логин'
        },
        first_name: {
            name: 'first_name',
            type: 'text',
            placeholder: 'Имя'
        },
        second_name: {
            name: 'second_name',
            type: 'text',
            placeholder: 'Фамилия'
        },
        phone: {
            name: 'phone',
            type: 'tel',
            placeholder: 'Телефон'
        },
        password: {
            name: 'password',
            type: 'password',
            placeholder: 'Пароль'
        },
        conf_password: {
            name: 'conf_password',
            type: 'password',
            placeholder: 'Пароль (ещё раз)',
            error: true
        },
    }
};
