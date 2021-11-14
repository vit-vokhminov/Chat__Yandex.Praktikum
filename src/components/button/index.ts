import Block from "Core/Block";
import {template} from './index.tmpl';

export default class Button extends Block {
    constructor(props: object) {
        super(props);
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }

}
