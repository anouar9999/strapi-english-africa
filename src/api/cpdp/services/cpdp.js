'use strict';

/**
 * cpdp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cpdp.cpdp');
