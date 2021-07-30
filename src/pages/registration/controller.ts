import Controller from "Core/Controller";
import {authAPI, RegisterFormData} from "Api/AuthAPI";
import {Routes} from "Src/index";

class SignUpController extends Controller {
    constructor() {
        super();
    }

    async signUp(data: RegisterFormData) {
        try {
            await authAPI.signUp(data);
            this.go(Routes.chat);
        } catch (e) {
            this.statusHandler(e.status, errorDescriptions);
        }
    }
}

const errorDescriptions = {409: 'Пользователь с такими параметрами (login, email) уже существует'};

const signUpController = new SignUpController();
export default signUpController;
