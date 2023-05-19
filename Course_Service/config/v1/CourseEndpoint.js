'use strict';
module.exports = {
  '/courses': {
    get: {
      method: 'getCourses',
      public: true,
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
      public: true,
      schema: {}
    },
    delete: {
      method: 'deleteCoursesById',
      public: true,
      schema: {}
    },
    put: {
      method: 'updateCourse',
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
};