FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
# ENV NODE_ENV production

RUN npm install
# RUN npm run build
COPY . .

EXPOSE 5000
CMD [ "node", "bin/www" ]

# docker build -t tagName .
# docker run -p 5000:5000 -d tagName