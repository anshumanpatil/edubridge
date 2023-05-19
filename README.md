# Edubridge App Services

Service api's for handling training data.

## Installation

#### Docker Container (Best Way)

```bash
git clone https://github.com/anshumanpatil/edubridge.git
cd edubridge
docker-compose up -d
```


#### Local Machine

```bash
git clone https://github.com/anshumanpatil/edubridge.git
cd edubridge

# start 'Auth_Service'
cd Auth_Service
npm i --verbose
npm start

# start 'Course_Service'
cd Course_Service
npm i --verbose
npm start

# start 'Trainer_Service'
cd Trainer_Service
npm i --verbose
npm start
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
