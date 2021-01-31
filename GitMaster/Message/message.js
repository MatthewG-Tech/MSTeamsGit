// Copyright (c) Matthew Guerra. All rights reserved.
// Licensed under the MIT License.

class Message {
    constructor(object) {
        this.id = object.id;
        this.action = object.action;
        this.status = object.status;
        this.date = object.date;
        this.user = object.user;
        this.owner = object.owner;
    }
}

module.exports.Message = Message;

