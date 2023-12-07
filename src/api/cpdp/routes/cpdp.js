'use strict';

/**
 * cpdp router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cpdp.cpdp');
