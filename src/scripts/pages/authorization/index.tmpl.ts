export const template =`
    <div class="popup popup__log_system">
        <div class="popup_main">
            <div class="popup_title">Вход</div>
            <div class="popup_cont">
                <form action="" method="post" class="order_form btnNone" data-type="formLogin">
                {{#each authorization}}
                    <div class="popup_cont_line">
                        <input class="valid" name={{name}} type={{type}} placeholder={{placeholder}} />
                    </div>
                {{/each}}
                    <div class="text_error hidden">Неверный логин или пароль</div>
                    {{> button}}
                </form>
                <div class="no_account">
                    <a href="registration.html">Нет аккаунта?</a>
                </div>
            </div>
        </div>
    </div>
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
