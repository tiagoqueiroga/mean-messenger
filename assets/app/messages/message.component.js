"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        this.editClicked = new core_1.EventEmitter();
    }
    MessageComponent.prototype.onEdit = function () {
        this._messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messageService.deleteMessage(this.message);
    };
    __decorate([
        core_1.Input()
    ], MessageComponent.prototype, "message");
    __decorate([
        core_1.Output()
    ], MessageComponent.prototype, "editClicked");
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "\n                      <article class=\"panel panel-default\" >\n                            <div class=\"panel-body\">\n                                {{message.content}}\n                            </div>\n                            <footer class=\"panel-footer\">\n                                <div class=\"author\">\n                                    {{message.username}}\n                                </div>\n                                <div class=\"config\">\n                                    <a href=\"#\" (click)=\"onEdit()\">Edit</a>\n                                    <a href=\"#\" (click)=\"onDelete()\">Delete</a>\n                                </div>\n                            </footer>\n                       </article>\n    ",
            styles: ["\n        .author{\n            display:inline-block;\n            font-style:italic;\n            font-size:12px;\n            width:80%;\n        }\n        .config{\n            display:inline-block;\n            text-align:right;\n            font-style:italic;\n            font-size:12px;\n            width:19%;\n        }\n    "]
        })
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map