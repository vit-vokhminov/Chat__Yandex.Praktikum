import {formValidator} from './validator';

const forms = document.querySelectorAll('form');

// Валидация отдельных инпутов
// @ts-ignore
const validateInput = ( {form, input, fData} ) => {
    const formType = form.dataset.type;
    const _formValidator:any = formValidator;

    let err: string | null = null;
    // @ts-ignore
    _formValidator[formType][input.name].forEach(elem => {

        const regExp = new RegExp(elem.exp);
        if (!regExp.test(input.value)){
            err = elem.err;
        }

        if(input.classList.contains('valid')){
            valipatePopup(input, err);
        }
        if(formType === 'formRegistration' && input.name === 'password' || input.name === 'conf_password'){
            passwordEquality(form);
        }

        if(err){
            fData[input.name] = null;
        }else{
            fData[input.name] = input.value;
        }

        formCompleted(form, fData);

    });

};

// проверка на равенство паролей
const passwordEquality = (form: any) => {
    const text_error = form.querySelector(`.text_error`);
    const password = form.querySelector(`input[name="password"]`);
    const conf_password = form.querySelector(`input[name="conf_password"]`);

    if(password.value !== conf_password.value) {
        text_error.classList.remove('hidden');
        return false;
    }else{
        text_error.classList.add('hidden');
        return true;
    }

};

const valipatePopup = (input: HTMLInputElement, err: string | null) => {
    if(err){
        input.classList.add('input_error');
    }else{
        input.classList.remove('input_error');
    }
};

const formCompleted = (form:any, fData:any) => {
    let ERR = true;

    Object.keys(fData).forEach((key: any) => {
        if(!fData[key]) {
            ERR = false;
        }
        if(form.dataset.type === 'formRegistration' && key === 'password' || key === 'conf_password') {
            const equality = passwordEquality(form);
            if(!equality) {ERR = false}
        }
    });

    if(ERR){
        form.classList.remove('btnNone');
    }else{
        form.classList.add('btnNone');
    }
}

// submit форм
if (forms) {
    forms.forEach(form => {

        // собираем значения инпутов в объект
        const fData: any = {};

        const formType = form.dataset.type;

        // @ts-ignore
        Object.keys(formValidator[formType]).map(elem => {
            fData[elem] = null;
        })

        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('blur', validateInput.bind(input, {form, input, fData}));
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            console.log('fData',fData)
        });
    });
};

