import { template, dataProfile } from './index.tmpl';
import ArrowBack from '../../../components/arrowBack/ArrowBack';

const app = document.querySelector('.app');

const arrowBack = new ArrowBack({});
if (arrowBack.element){
    Handlebars.registerPartial('arrowBack', arrowBack.element.innerHTML);
}

if (app){
    app.innerHTML = Handlebars.compile(template)(dataProfile);
}

