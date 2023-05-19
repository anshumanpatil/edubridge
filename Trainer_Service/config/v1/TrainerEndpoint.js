'use strict';
module.exports = {
  '/trainers': {
    get: {
      method: 'getTrainers',
      public: true,
      schema: {}
    },
    post: {
      method: 'postTrainers',
      public: true,
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
      public: true,
      schema: {}
    },
    delete: {
      method: 'deleteTrainersById',
      public: true,
      schema: {}
    },
    put: {
      method: 'updateTrainer',
      public: true,
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