import {template} from "./template";
import Block from "Core/Block";

export default class ErrorBanner extends Block {
    constructor(props: any, storePath: string | null = null) {
        super(props, storePath);
    }

    compile(context: any) {
        return Handlebars.compile(template)(context);
    }
}
