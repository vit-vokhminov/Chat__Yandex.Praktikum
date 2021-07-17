import {API} from "./API";

export type QueryOptions = {
    offset?: number,
    limit?: number,
    title?: string
}

export interface CreateChatData {
    title: string;
}

export interface AddChatUserData {
    users: number[],
    chatId: number
}

class ChatsAPI extends API {
    constructor() {
        super();
    }

    getChat(data?: QueryOptions) {
        return this.get('/chats', {data});
    }

    getArchived(data: any) {
        return this.get('/chats/archive', {data});
    }

    createChat(data: CreateChatData) {
        return this.post('/chats', {data});
    }

    deleteChat(data: any) {
        return this.delete('/chats', {data});
    }

    archiveChat(data: any) {
        return this.post('/chats/archive', {data});
    }

    unArchiveChat(data: any) {
        return this.post('/chats/unarchive', {data});
    }

    getUsers(chatID: any) {
        return this.get(`/chats/${chatID}/users`);
    }

    getNewMessagesCount(chatID: number) {
        return this.get(`/chats/new/${chatID}`);
    }

    uploadAvatar(data: any) {
        return this.put('/chats/avatar', {data});
    }

    addUser(data: AddChatUserData) {
        return this.post('/chats/users', {data});
    }

    deleteUser(data: any) {
        return this.delete('/chats/users', {data});
    }

    getToken(chatID: number) {
        return this.post(`/chats/token/${chatID}`);
    }
}

export const chatsAPI = new ChatsAPI();