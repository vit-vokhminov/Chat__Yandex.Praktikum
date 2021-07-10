import { template, data500 } from './index.tmpl';

const app = document.querySelector('.app');

if (app){
    app.innerHTML = Handlebars.compile(template)(data500);
}

