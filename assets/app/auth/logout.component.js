"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LogoutComponent = (function () {
    function LogoutComponent() {
        this.onLogout = {};
    }
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'my-logout',
            template: "\n\t\t                <section class=\"col-md-8 col-md-offset-2\">\n\t\t                \t<button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n\t\t                </section>\n\n\t"
        })
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map