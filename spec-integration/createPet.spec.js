const { expect } = require('chai');
const sinon = require('sinon');
const action = require('../lib/actions/upsert');

const cfg = {
  apiKey: 'secret',
  status: 'sold',
};

const msg = {
  body: {
    name: 'Nemo',
    status: 'Pending',
  },
};

// we use sinon to mock functions such as `emit`, which come from sailor when the code is loaded onto the platform
const self = {
  emit: sinon.spy(),
};

describe('Get Pets By Status', () => {
  it('Creates a pet', async () => {
    await action.process.call(self, msg, cfg);
    expect(self.emit.calledOnce).to.be.true;
  });
});
