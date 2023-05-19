'use strict';
module.exports = {
  '/trainers': {
    get: {
      method: 'getTrainers',
      public: false,
      schema: {}
    },
    post: {
      method: 'postTrainers',
      public: false,
      schema: {
        body: {
          name: Joi.string().allow('').required(),
          middleName: Joi.string().allow('').required(),
          surName: Joi.string().allow('').required(),
          mobile: Joi.string().allow('').required()
        }
      }

    },
  },
  '/trainers/:id': {
    get: {
      method: 'getTrainersById',
      public: false,
      schema: {}
    },
    delete: {
      method: 'deleteTrainersById',
      public: false,
      schema: {}
    },
    put: {
      method: 'updateTrainer',
      public: false,
      schema: {
        body: {
          name: Joi.string().allow('').required(),
          middleName: Joi.string().allow('').required(),
          surName: Joi.string().allow('').required(),
          mobile: Joi.string().allow('').required()
        }
      }

    },
  },
};