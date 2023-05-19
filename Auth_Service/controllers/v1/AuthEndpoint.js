const { mongo } = models = require('../../db/models');
const { User } = mongo;
const jwt = require("jsonwebtoken");
const httpCodes = require('../../lib/http-codes')
var envConfig = require('../../config/env');
var config    = envConfig.get('jwt');

module.exports = class ProfileEndpoint {
    constructor(){

    }

    Register(req, res){
        let __chheck = { "username": req.body.username, "password": req.body.password};
        
        User.findOneOrCreate(__chheck ,req.body, (err, profile) => {
            return res.status(((profile.created) ? httpCodes.OK : httpCodes.CONFLICT)).json({
                "success": profile.created,
                "user": profile.username
            });
        });
    }
    Login(req, res){
        User.find({
            "username": req.body.username,
            "password": req.body.password,
        }).lean().limit(1)
        .exec(function(error, result) {
            if (error) { 
                return res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": error
                });
            }else{
                const token = jwt.sign(
                    { user_id: result.user_id },
                    config.secret,
                    {
                      expiresIn: '24h',
                    }
                  );
              
                return res.status(httpCodes.OK).json({
                    "success": result.length ? true : false,
                    "token": result.length ? token : null
                });
            }
        })
    }

    
}