const assert = require('assert');
const sinon = require('sinon');
const { Message } = require('../../Message/message.js');

var defaultMessage = { id: "test", action: "run", status: "status", date: new Date(), user: "user", owner: "owner" };

describe('Test Message Formatter', () => {
    it('Constructor should properly make a message', () => {
        var message = new Message(object);
        assert.strictEqual(object.id, message.id);
        assert.strictEqual(object.action, message.action);
        assert.strictEqual(object.status, message.status);
        assert.strictEqual(object.date, message.date);
        assert.strictEqual(object.user, message.user);
        assert.strictEqual(object.owner, message.owner);
    });
});