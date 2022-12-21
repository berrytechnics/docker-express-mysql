FROM node:16 as dev
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --quiet
COPY . .
ENV PORT=4200
EXPOSE 4200
CMD ["npm","run","start"]