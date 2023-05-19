const { mongo } = models = require('../../db/models');
const { User_Profile } = mongo;
const { Trainer } = mongo;
const uuid = require('node-uuid');
const httpCodes = require('../../lib/http-codes')

module.exports = class ProfileEndpoint {
    constructor(){

    }

    postTrainers(req, res){
        let __chheck = { "mobile" : req.body.mobile};
        
        Trainer.findOneOrCreate(__chheck ,req.body, (err, profile) => {
            return res.status(((profile.created) ? httpCodes.OK : httpCodes.CONFLICT)).json({
                "success": profile.created,
                "trainer": profile
            });
        });
    }

    updateTrainer(req, res){
        let __profile = { "trainer_id" : req.params.id, ...req.body };
        var query = { "trainer_id" : req.params.id };
        
        Trainer.findOneAndUpdate(query, __profile, { upsert : false }, (err, profile) => {
            if (err || !profile) {
                return res.status(httpCodes.NOTFOUND).json({ error : "No trainer found" })
            }else{
                return res.status(httpCodes.OK).json({
                    "success": true,
                    "trainer": profile
                });
            }
        });
    }

    deleteTrainersById(req, res){
        
        Trainer.find({
            "trainer_id": req.params.id
        }).remove().exec(function(error, result) {
            if (error) { 
                return res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": error
                });
            }else{
                return res.status(httpCodes.OK).json({
                    "success": true,
                });
            }
        })
    }
    
    getTrainers(req, res){
        
        Trainer.find().exec(function(error, result) {
            if (error) { 
                return res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": error
                });
            }else{
                return res.status(httpCodes.OK).json({
                    "success": result.length ? true : false,
                    "Trainer": result
                });
            }
        })
    }

    getTrainersById(req, res){
        Trainer.find({
            "trainer_id": req.params.id
        }).lean().limit(1)
        .exec(function(error, result) {
            if (error) { 
                return res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": error
                });
            }else{
                return res.status(httpCodes.OK).json({
                    "success": result.length ? true : false,
                    "Trainer": result
                });
            }
        })
    }

    
}