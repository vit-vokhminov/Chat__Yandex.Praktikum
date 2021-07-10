import { Block } from "../../scripts/core/Block";

export default class Button extends Block {
    constructor(props: object) {
        super('button', props);
    }

    render() {
        return `
            <button type={{type}} class="btn">{{text}}</button>
        `;
    }
}
