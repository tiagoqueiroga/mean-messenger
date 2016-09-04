"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var message_1 = require("./message");
var message_service_1 = require("./message.service");
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
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "\n                      <article class=\"panel panel-default\" >\n                            <div class=\"panel-body\">\n                                {{message.content}}\n                            </div>\n                            <footer class=\"panel-footer\">\n                                <div class=\"author\">\n                                    {{message.username}}\n                                </div>\n                                <div class=\"config\">\n                                    <a href=\"#\" (click)=\"onEdit()\">Edit</a>\n                                    <a href=\"#\" (click)=\"onDelete()\">Delete</a>\n                                </div>\n                            </footer>\n                       </article>\n    ",
            styles: ["\n        .author{\n            display:inline-block;\n            font-style:italic;\n            font-size:12px;\n            width:80%;\n        }\n        .config{\n            display:inline-block;\n            text-align:right;\n            font-style:italic;\n            font-size:12px;\n            width:19%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFDckUsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBcUNqRDtJQUlJLDBCQUFxQixlQUE4QjtRQUE5QixvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUZ6QyxnQkFBVyxHQUFHLElBQUksbUJBQVksQ0FBUyxDQUFDLENBQUM7SUFJbkQsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQWJEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt5REFBQTtJQXJDYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsWUFBWTtZQUNyQixRQUFRLEVBQUMsZ3dCQWVSO1lBQ0QsTUFBTSxFQUFDLENBQUMsaVZBY1AsQ0FBQztTQUNMLENBQUM7O3dCQUFBO0lBa0JGLHVCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSx3QkFBZ0IsbUJBZ0I1QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LElucHV0LE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidteS1tZXNzYWdlJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bWVzc2FnZS5jb250ZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bWVzc2FnZS51c2VybmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgIGAsXG4gICAgc3R5bGVzOltgXG4gICAgICAgIC5hdXRob3J7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6aXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICB3aWR0aDo4MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbmZpZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6aXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICB3aWR0aDoxOSU7XG4gICAgICAgIH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnR7XG4gICAgQElucHV0KCkgIG1lc3NhZ2U6TWVzc2FnZTtcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKDxzdHJpbmc+KTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9tZXNzYWdlU2VydmljZTpNZXNzYWdlU2VydmljZSl7XG5cbiAgICB9XG5cbiAgICBvbkVkaXQoKXtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZWRpdE1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZSgpe1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5kZWxldGVNZXNzYWdlKHRoaXMubWVzc2FnZSk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
