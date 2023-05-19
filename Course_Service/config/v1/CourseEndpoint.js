'use strict';
module.exports = {
  '/courses': {
    get: {
      method: 'getCourses',
      public: false,
      schema: {}
    },
    post: {
      method: 'postCourses',
      public: true,
      schema: {
        body: {
          name: Joi.string().allow('').required(),
          duration: Joi.string().allow('').required(),
          fees: Joi.string().allow('').required()
        }
      }

    },
  },
  '/courses/:id': {
    get: {
      method: 'getCoursesById',
      public: false,
      schema: {}
    },
    delete: {
      method: 'deleteCoursesById',
      public: false,
      schema: {}
    },
    put: {
      method: 'updateCourse',
      public: false,
      schema: {
        body: {
          name: Joi.string().allow('').required(),
          duration: Joi.string().allow('').required(),
          fees: Joi.string().allow('').required()
        }
      }

    },
  },
};