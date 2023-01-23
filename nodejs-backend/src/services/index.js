const users = require('./users/users.service.js');
const deviceinfo = require('./deviceinfo/deviceinfo.service.js');
const groups = require('./groups/groups.service.js');
const chats = require('./chats/chats.service.js');
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(deviceinfo);
  app.configure(groups);
  app.configure(chats);
  // ~cb-add-configure-service-name~
};
