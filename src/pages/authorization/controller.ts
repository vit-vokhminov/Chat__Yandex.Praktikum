import Controller from "Core/Controller";
import {authAPI, LoginFormData} from "Api/AuthAPI";
import {Routes} from "Src/index";
import {storeMap} from "Src/config";

class LoginController extends Controller {
    constructor() {
        super();
    }

    async signIn(data: LoginFormData) {
        try {
            await authAPI.signIn(data);
            this.go(Routes.chat);
        } catch (e) {
            this.statusHandler(e.status);
        }
    }

    async checkAuth() {
        try {
            const response = await authAPI.getUserInfo();
            this.go(Routes.chat);
            this.storeSet(storeMap.currentUserID, response.response["id"]);
        } catch (e) {
            return;
        }
    }
}

const loginController = new LoginController();
export default loginController;
