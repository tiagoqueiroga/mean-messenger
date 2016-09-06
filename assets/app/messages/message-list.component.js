"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var message_component_1 = require("./message.component");
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
            _this._messageService.messages = messages;
        });
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n                <section class=\"col-md-8 col-md-offset-2\" >\n                    <my-message \n                                 *ngFor=\"let message of messages\" \n                                 [message]=\"message\" \n                                 (editClicked)=\"message.content = $event\">\n                    </my-message>\n                </section>\n    ",
            directives: [message_component_1.MessageComponent]
        })
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;
//# sourceMappingURL=message-list.component.js.map