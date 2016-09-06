"use strict";
var Message = (function () {
    function Message(content, messageId, username, userId) {
        this.content = content;
        this.messageId = messageId;
        this.username = username;
        this.userId = userId;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map