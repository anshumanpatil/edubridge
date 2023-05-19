FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# RUN npm run build
COPY . .

EXPOSE 6000
CMD [ "node", "bin/www" ]

# docker build -t tagName .
# docker run -p 5000:5000 -d tagName