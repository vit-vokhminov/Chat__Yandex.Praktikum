export const template =`
    {{> arrowBack}}
    
    <div class="profile_main">
        <div class="profile">
        
            <form action="" method="post" class="btnNone" data-type="formProfileEditPass">
        
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
                        <div class="name_field">Старый пароль</div>
                        <div class="value_field">
                            <input type="password" name="old_pass" class="valid"
                                   placeholder="&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;">
                        </div>
                    </div>
                    <div class="profile_line">
                        <div class="name_field">Новый пароль</div>
                        <div class="value_field">
                            <input type="password" name="password" class="valid"
                                   placeholder="&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;">
                        </div>
                    </div>
                    <div class="profile_line">
                        <div class="name_field">Повторите новый пароль</div>
                        <div class="value_field">
                            <input type="password" name="conf_password" class="valid"
                                   placeholder="&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;">
                        </div>
                    </div>
                    <div class="text_error hidden">Пароли не совпадают</div>
                </div>
                <div class="profile_btn">
                    {{> button}}
                </div>
            
            </form>
            
        </div>
    </div>
`;

export const dataProfileEditPass = {
    avatar: ''
};
