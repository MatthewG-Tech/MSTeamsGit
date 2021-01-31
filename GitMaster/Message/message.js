// Copyright (c) Matthew Guerra. All rights reserved.
// Licensed under the MIT License.
MessageAction = {
    PUSH: "push",
    PIPELINE: "pipeline",
    COMMENT: "comment",
    TASKCOMPLETE: "task completed"
}

class Message {
    constructor(object) {
        this.id = object.id;
        this.action = object.action;
        this.status = object.status;
        this.date = object.date;
        this.user = object.user;
        this.owner = object.owner;
        this.repo = object.repo;
    }

    getFormattedMessage() {
        switch(this.action){
            case(MessageAction.PUSH):
                return this.createMessage(`Code has been push by ${this.user} to ${this.repo}`, this.user);
                break;
            case(MessageAction.PIPELINE):
                return this.createMessage(`Pipeline ${this.status} on ${this.repo}`);
                break;
            case(MessageAction.COMMENT):
                return this.createMessage(`Comment made by ${this.user}`, this.user);
                break;
            case(MessageAction.TASKCOMPLETE):
                return this.createMessage(`A task has been completed by ${this.user}`, this.user);
                break;
        }
    }

    createMessage(message, user) {
        return { text: message, user: user };
    }
}

module.exports.Message = Message;

