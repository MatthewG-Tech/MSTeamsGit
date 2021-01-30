const assert = require('assert');
const sinon = require('sinon');
const { BotActivityHandler, mentionActivityAsync } = require('../botActivityHandler.js');

describe('Test Simple Mention Of User', () => {
    it('Should call sendActivity', () => {
        const name = "From Name";
        const context = getContextWithName(name);

        const mock = sinon.mock(context);
        mock.expects("sendActivity").withArgs(getExpectedResponseWithName(name)).once();

        BotActivityHandler.mentionActivityAsync(context);

        mock.verify();
    });
});

const getContextWithName = (name) => {
    return {
        activity: {
            from: {
                name: name
            }
        },
        sendActivity: function () {
            return '123';
        }
    }
}

const getExpectedResponseWithName = (name) => {
    return {
        type: 'message',
        text: `Hi <at>${name}</at>`,
        inputHint: 'acceptingInput',
        entities:
            [
                {
                    mentioned: { name: name },
                    text: `<at>${name}</at>`,
                    type: 'mention'
                }
            ]
    }
}