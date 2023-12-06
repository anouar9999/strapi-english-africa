'use strict';

/**
 * teacher-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::teacher-course.teacher-course');
