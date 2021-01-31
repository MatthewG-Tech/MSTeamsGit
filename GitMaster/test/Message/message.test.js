const assert = require('assert');
const { MessageReactionTypes } = require('botbuilder');
const sinon = require('sinon');
const { Message } = require('../../Message/message.js');

var defaultMessageInput = { id: "test", action: MessageAction.PUSH, status: "status", date: new Date(), user: "user", owner: "owner", repo: "repo" };

describe('Test Message Formatter', () => {
    it('Constructor should properly make a message', () => {
        var message = new Message(defaultMessageInput);
        assert.strictEqual(defaultMessageInput.id, message.id);
        assert.strictEqual(defaultMessageInput.action, message.action);
        assert.strictEqual(defaultMessageInput.status, message.status);
        assert.strictEqual(defaultMessageInput.date, message.date);
        assert.strictEqual(defaultMessageInput.user, message.user);
        assert.strictEqual(defaultMessageInput.owner, message.owner);
        assert.strictEqual(defaultMessageInput.repo, message.repo);

    });

    it('Get push action forrmatted message', () => {
        defaultMessageInput.action = MessageAction.PUSH;
        var message = new Message(defaultMessageInput);
        var formattedMessage = message.getFormattedMessage();
        var staticText = `Code has been push by ${defaultMessageInput.user} to ${defaultMessageInput.repo}`
        assert.strictEqual(formattedMessage.text, staticText);
        assert.strictEqual(formattedMessage.user, defaultMessageInput.user);
    });

    it('Get pipeline passed action forrmatted message', () => {
        defaultMessageInput.action = MessageAction.PIPELINE;
        defaultMessageInput.status = "passed";
        var message = new Message(defaultMessageInput);
        var formattedMessage = message.getFormattedMessage();
        assert.strictEqual(formattedMessage.text, `Pipeline ${defaultMessageInput.status} on ${defaultMessageInput.repo}`);
    });

    it('Get pipeline failed action forrmatted message', () => {
        defaultMessageInput.action = MessageAction.PIPELINE;
        defaultMessageInput.status = "failed";
        var message = new Message(defaultMessageInput);
        var formattedMessage = message.getFormattedMessage();
        assert.strictEqual(formattedMessage.text, `Pipeline ${defaultMessageInput.status} on ${defaultMessageInput.repo}`);
    });


    it('Get comment action forrmatted message', () => {
        defaultMessageInput.action = MessageAction.COMMENT;
        var message = new Message(defaultMessageInput);
        var formattedMessage = message.getFormattedMessage();
        assert.strictEqual(formattedMessage.text, `Comment made by ${defaultMessageInput.user}`);
        assert.strictEqual(formattedMessage.user, defaultMessageInput.user);
    });

    it('Get task complete action forrmatted message', () => {
        defaultMessageInput.action = MessageAction.TASKCOMPLETE;
        var message = new Message(defaultMessageInput);
        var formattedMessage = message.getFormattedMessage();
        assert.strictEqual(formattedMessage.text, `A task has been completed by ${defaultMessageInput.user}`);
        assert.strictEqual(formattedMessage.user, defaultMessageInput.user);
    });
});