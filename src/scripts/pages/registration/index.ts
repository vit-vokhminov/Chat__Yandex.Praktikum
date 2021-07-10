import { template, data } from './index.tmpl';
import Button from '../../../components/button/button';

const app = document.querySelector('.app');

const button = new Button({
    text: 'Зарегистрироваться',
    type: 'submit'
});
if (button.element){
    Handlebars.registerPartial('button', button.element.innerHTML);
}

if (app){
    app.innerHTML = Handlebars.compile(template)(data);
}

