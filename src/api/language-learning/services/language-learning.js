'use strict';

/**
 * language-learning service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::language-learning.language-learning');
