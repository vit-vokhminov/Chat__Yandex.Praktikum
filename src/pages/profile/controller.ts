import Controller from "../../core/Controller";
import {authAPI, UserInfoData} from "../../api/AuthAPI";
import {SETTINGS, storeMap} from "../../config";
import {Routes} from "../../index";


export class ProfileController extends Controller {
    constructor() {
        super();
    }

    async getUserInfo() {
        try {
            const response = await authAPI.getUserInfo();
            return response.response;
        } catch (e) {
            this.statusHandler(e.status);
        }
        return null;
    }

    async logout() {
        try {
            await authAPI.logout();
            this.go(Routes.pageAuthorization);
        } catch (e) {
            this.statusHandler(e.status);
        }
    }

    async updateUserInfo() {
        const userInfo: UserInfoData = await this.getUserInfo();
        if (!userInfo) {
            return;
        }
        if (userInfo.avatar) {
            userInfo.avatar = SETTINGS.baseURL + userInfo.avatar;
        }
        this.storeSet(storeMap.profilePageProps, userInfo);
    }
}

const profileController = new ProfileController();
export default profileController;
