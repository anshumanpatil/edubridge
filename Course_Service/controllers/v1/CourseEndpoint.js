const { mongo } = models = require('../../db/models');
const { User_Profile } = mongo;
const { Course } = mongo;
const uuid = require('node-uuid');
const httpCodes = require('../../lib/http-codes')

module.exports = class ProfileEndpoint {
    constructor() {

    }

    postCourses(req, res) {
        let __chheck = { "mobile": req.body.mobile };

        Course.findOneOrCreate(__chheck, req.body, (err, profile) => {
            return res.status(((profile.created) ? httpCodes.OK : httpCodes.CONFLICT)).json({
                "success": profile.created,
                "Course": profile
            });
        });
    }

    updateCourse(req, res) {
        let __profile = { "course_id": req.params.id, ...req.body };
        var query = { "course_id": req.params.id };

        Course.findOneAndUpdate(query, __profile, { upsert: false }, (err, profile) => {
            if (err || !profile) {
                return res.status(httpCodes.NOTFOUND).json({ error: "No trainer found" })
            } else {
                return res.status(httpCodes.OK).json({
                    "success": true,
                    "trainer": profile
                });
            }
        });
    }

    deleteCoursesById(req, res) {

        Course.find({
            "course_id": req.params.id
        }).remove().exec(function (error, result) {
            if (error) {
                return res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": error
                });
            } else {
                return res.status(httpCodes.OK).json({
                    "success": true,
                });
            }
        })
    }

    getCourses(req, res) {

        Course.find().exec(function (error, result) {
            if (error) {
                return res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": error
                });
            } else {
                return res.status(httpCodes.OK).json({
                    "success": result.length ? true : false,
                    "Course": result
                });
            }
        })
    }

    getCoursesById(req, res) {
        Course.find({
            "course_id": req.params.id
        }).lean().limit(1)
            .exec(function (error, result) {
                if (error) {
                    return res.status(httpCodes.NOTFOUND).json({
                        "success": false,
                        "error": error
                    });
                } else {
                    return res.status(httpCodes.OK).json({
                        "success": result.length ? true : false,
                        "Course": result
                    });
                }
            })
    }


}