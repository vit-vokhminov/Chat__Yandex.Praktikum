export const template = `
    {{#each popups}}
        <div class="popup hidden" id={{id}}>
            <div class="popup_main">
                <div class="popup_title">{{title}}</div>
                <div class="popup_cont">
                    <form action="" method="post" class="order_form" data-type="formPopupUser">
                        <div class="popup_cont_line">
                            <input class="valid" name={{inputName}} type={{inputType}} placeholder={{placeholder}} />
                        </div>
                        <button type="submit" class="btn">{{textButton}}</button>
                    </form>
                </div>
            </div>
        </div>
    {{/each}}
`;
