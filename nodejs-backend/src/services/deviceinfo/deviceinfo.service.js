const { Deviceinfo } = require('./deviceinfo.class');
const createModel = require('../../models/deviceinfo.model');
const hooks = require('./deviceinfo.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/deviceinfo', new Deviceinfo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('deviceinfo');

  service.hooks(hooks);
};