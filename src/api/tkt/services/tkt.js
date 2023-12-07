'use strict';

/**
 * tkt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tkt.tkt');
