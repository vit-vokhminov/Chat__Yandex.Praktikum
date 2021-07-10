import { Block } from "../../scripts/core/Block";

export default class ChatSidebar extends Block {
    constructor(props: object) {
        super('ChatSidebar', props);
    }

    render() {
        return `
            <div class="sidebar_chat">

                <div class="sidebar_chat_top">
    
                    <div class="bt_profile">Профиль <img src="../img/icon/arrow_right.svg" alt=""></div>
    
                    <label class="label_inp_search">
                        <input type="text" name="search" placeholder="Поиск" class="inp_search">
                    </label>
    
                </div>
    
                {{> chatСontacts}}
    
            </div>
        `;
    }
}


export const dataSidebar = {

};
