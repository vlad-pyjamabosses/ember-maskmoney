/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-vmaskmoney',
  included(app) {
    this._super.included(app);
    if (!process.env.EMBER_CLI_FASTBOOT) {
      // If this flag is present, the addon is being built in FastBoot
      // The jQuery plugin causes FastBoot to crash, so only import in
      // the browser build
      app.import(app.bowerDirectory + '/jquery-maskmoney/dist/jquery.maskMoney.js');
    }
  }
};
