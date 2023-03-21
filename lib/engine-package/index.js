/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'engine-package',

  lazyLoading: Object.freeze({
    enabled: false,
  }),

  isDevelopingAddon() {
    return true;
  },
});
