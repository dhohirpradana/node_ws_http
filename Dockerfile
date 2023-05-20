FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 20001
EXPOSE 20000

CMD ["npm", "start"]