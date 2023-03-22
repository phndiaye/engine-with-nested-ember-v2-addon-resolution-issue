/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');
const { MergeTrees } = require('broccoli-merge-trees');

module.exports = EngineAddon.extend({
  name: 'engine-package',

  lazyLoading: Object.freeze({
    enabled: false
  }),

  isDevelopingAddon() {
    return true;
  },

  treeForApp() {
    let trees = [this._super.treeForApp.apply(this, arguments)];

    const v2AddonTrees = this.addons
      .filter((addon) => {
        return addon.pkg['ember-addon']?.version && addon.pkg['ember-addon']?.version === 2;
      })
      .reduce((acc, addon) => {
        acc.push(addon.treeForApp.apply(this, arguments));
        return acc;
      }, []);

    trees.push(...v2AddonTrees);

    return new MergeTrees(trees.filter(Boolean));
  }
});
