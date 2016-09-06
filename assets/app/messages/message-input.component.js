"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var message_1 = require("./message");
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var message = new message_1.Message(form.content, null, 'Dummy');
        this._messageService.addMessage(message)
            .subscribe(function (data) {
            console.log(data);
            _this._messageService.messages.push(data);
        }, function (error) { return console.log(error); });
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n                <section class=\"col-md-8 col-md-offset-2\">\n                     <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                            <div class=\"form-group\">\n                                <label for=\"content\">Content</label>\n                                <input ngControl=\"content\" type=\"text\" class=\"form-control\" id=\"content\" let #input>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary\">Send Message</button>\n                    </form>\n                </section>\n    "
        })
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;
//# sourceMappingURL=message-input.component.js.map