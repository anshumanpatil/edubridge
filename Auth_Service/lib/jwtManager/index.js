const jwt = require('jsonwebtoken');
const redis = require('./jwtRedis');

class jwtManager {
    constructor(__config){
        this.__config = __config;
    }
    getToken(id, expiresIn = 6000){

        return jwt.sign({ id }, this.__config.secret, {
            expiresIn // expires in 10 min
        });
    }
}
module.exports = config => new jwtManager(config)