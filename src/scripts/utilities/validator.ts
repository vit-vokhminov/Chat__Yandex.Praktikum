const VALIDATOR = {
    MIN_LENGTH: {
        exp: /^[a-zа-яё0-9_-]{3,}$/,
        err: 'Минимальная длина - 3 символа'
    },
    MAX_LENGTH: {
        exp: /^[a-zа-яё0-9_-]{0,25}$/,
        err: 'Максимальная длина - 25 символов'
    },
    ALPHANUMERIC: {
        exp: /^[a-zа-яё0-9_-]*$/,
        err: 'Недопустимые символы'
    },
    REQUIRED: {
        exp: /^.{1,}$/,
        err: 'Не может быть пустым'
    },
    EMAIL: {
        exp: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        err: 'Недопустимый формат email'
    },
    PHONE: {
        exp: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        err: 'Недопустимый формат номера'
    }
}


export const formValidator = {
    formLogin: {
        login: [VALIDATOR.REQUIRED],
        password: [VALIDATOR.REQUIRED]
    },
    formRegistration: {
        email: [
            VALIDATOR.REQUIRED,
            VALIDATOR.EMAIL
        ],
        login: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MIN_LENGTH,
            VALIDATOR.MAX_LENGTH,
            VALIDATOR.ALPHANUMERIC
        ],
        first_name: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MIN_LENGTH,
            VALIDATOR.MAX_LENGTH,
        ],
        second_name: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MAX_LENGTH,
        ],
        phone: [
            VALIDATOR.REQUIRED,
            VALIDATOR.PHONE,
        ],
        password: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MIN_LENGTH,
        ],
        conf_password: [
            VALIDATOR.REQUIRED
        ]
    },
    formChatSearch: {
        search: [
            VALIDATOR.REQUIRED
        ]
    },
    formChatMessage: {
        inp_message: [
            VALIDATOR.REQUIRED
        ]
    },
    formPopupUser: {
        login: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MIN_LENGTH,
            VALIDATOR.MAX_LENGTH,
            VALIDATOR.ALPHANUMERIC
        ]
    },
    formProfileEdit: {
        email: [
            VALIDATOR.REQUIRED,
            VALIDATOR.EMAIL
        ],
        login: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MIN_LENGTH,
            VALIDATOR.MAX_LENGTH,
            VALIDATOR.ALPHANUMERIC
        ],
        first_name: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MIN_LENGTH,
            VALIDATOR.MAX_LENGTH,
        ],
        second_name: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MAX_LENGTH,
        ],
        chat_name: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MAX_LENGTH,
        ],
        phone: [
            VALIDATOR.REQUIRED,
            VALIDATOR.PHONE,
        ]
    },
    formProfileEditAvatar: {
        file: [
            VALIDATOR.REQUIRED
        ]
    },
    formProfileEditPass: {
        old_pass: [
            VALIDATOR.REQUIRED,
        ],
        password: [
            VALIDATOR.REQUIRED,
            VALIDATOR.MIN_LENGTH,
        ],
        conf_password: [
            VALIDATOR.REQUIRED
        ]
    },
}
