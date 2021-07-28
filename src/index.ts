import 'Assets/css/resetNormalize.css';
import 'Assets/css/fonts.css';
import 'Assets/css/pages/authorization.css';
import 'Assets/css/pages/chat.css';
import 'Assets/css/pages/pageError.css';
import 'Assets/css/pages/profile.css';
import 'Assets/css/pages/registration.css';
import 'Assets/css/index.css';

import Router from 'Core/Router';
import Authorization from 'Pages/authorization/index';
import {dataAuthorization} from 'Pages/authorization/index.tmpl';

import Registration from 'Pages/registration/index';
import {dataRegistration} from 'Pages/registration/index.tmpl';

import {ErrorPage} from 'Pages/error/index';

import Chat from 'Pages/chat/index';

import Profile from 'Pages/profile/index';

import ProfileEdit from 'Pages/profileEdit/index';
import ProfileEditPass from 'Pages/profileEditPass/index';


import Store from "Core/Store";
import {storeMap} from "./config";

const router = new Router('.app');

export enum Routes {
    login = '/login',
    signup = '/signup',
    error = '/error',
    chat = '/chat',
    profile = '/profile',
    profileEdit = '/profile-edit',
    profileEditPass = '/profile-edit-pass',
}

router
    .use(Routes.login, Authorization, dataAuthorization)
    .use(Routes.signup, Registration, dataRegistration)
    .use(Routes.error, ErrorPage, {})
    .use(Routes.chat, Chat, {})
    .use(Routes.profile, Profile, {})
    .use(Routes.profileEdit, ProfileEdit, {})
    .use(Routes.profileEditPass, ProfileEditPass, {})

    // .use('/error404', LoginPage, loginContext)
    // .use('/error500', LoginPage, loginContext)
    .start();

// Обработчик несуществующего роута
router.badRouteHandler = () => {
    new Store().set(storeMap.errorPageProps, {type: '404', description: 'Не туда попали'});
    router.go(Routes.error);
}
router.go(Routes.login);
