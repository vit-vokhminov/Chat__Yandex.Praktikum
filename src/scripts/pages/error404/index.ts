import { template, data404 } from './index.tmpl';

const app = document.querySelector('.app');

if (app){
    app.innerHTML = Handlebars.compile(template)(data404);
}

