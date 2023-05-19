'use strict';
module.exports = {
  '/login': {
    post: {
      method: 'Login',
      public: true,
      schema: {
        body: {
          username: Joi.string().allow('').required(),
          password: Joi.string().allow('').required()
        }
      }

    },
  },
  '/register': {
    post: {
      method: 'Register',
      public: true,
      schema: {
        body: {
          username: Joi.string().allow('').required(),
          password: Joi.string().allow('').required()
        }
      }

    },
  },
};