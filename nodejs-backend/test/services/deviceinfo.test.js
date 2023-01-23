const assert = require('assert');
const app = require('../../src/app');

describe('\'deviceinfo\' service', () => {
  it('registered the service', () => {
    const service = app.service('deviceinfo');

    assert.ok(service, 'Registered the service (deviceinfo)');
  });
});
