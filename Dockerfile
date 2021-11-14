FROM node:12-alpine

# создание директории приложения
WORKDIR /app

# установка зависимостей
COPY package*.json ./

# копируем исходный код
COPY . .

RUN npm install
RUN npm run build

CMD [ "node", "server.js" ]
