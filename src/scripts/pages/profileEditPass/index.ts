import { template, dataProfileEditPass } from './index.tmpl';
import ArrowBack from '../../../components/arrowBack/ArrowBack';
import Button from '../../../components/button/button';

const app = document.querySelector('.app');

const arrowBack = new ArrowBack({});
if (arrowBack.element){
    Handlebars.registerPartial('arrowBack', arrowBack.element.innerHTML);
}

const button = new Button({
    text: 'Изменить',
    type: 'submit'
});
if (button.element){
    Handlebars.registerPartial('button', button.element.innerHTML);
}

if (app){
    app.innerHTML = Handlebars.compile(template)(dataProfileEditPass);
}

