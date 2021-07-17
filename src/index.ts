import Router from './core/Router';
import Authorization from './pages/authorization/index';
import {dataAuthorization} from './pages/authorization/index.tmpl';

import Registration from './pages/registration/index';
import {dataRegistration} from './pages/registration/index.tmpl';

import {ErrorPage} from './pages/error/index';

import Chat from './pages/chat/index';

import Profile from './pages/profile/index';

import ProfileEdit from './pages/profileEdit/index';
import ProfileEditPass from './pages/profileEditPass/index';


import Store from "./core/Store";
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
