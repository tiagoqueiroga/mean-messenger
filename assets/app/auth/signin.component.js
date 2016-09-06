"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var SigninComponent = (function () {
    function SigninComponent(_fb) {
        this._fb = _fb;
    }
    SigninComponent.prototype.onSubmit = function () {
        console.log(this.myForm.value);
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    SigninComponent.prototype.isEmail = function (control) {
        if (!control.value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)) {
            return { invalidMail: true };
        }
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'my-signin',
            template: "\n\t\t                <section class=\"col-md-8 col-md-offset-2\">\n\t\t                \t<form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" >\n\t\t                \t\t<div class=\"form-group\">\n\t\t                \t\t\t<label for=\"email\">E-mail</label>\n\t\t                \t\t\t<input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n\t\t                \t\t</div>\n\n\t\t                \t\t<div class=\"form-group\">\n\t\t                \t\t\t<label for=\"password\">Password</label>\n\t\t                \t\t\t<input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n\t\t                \t\t</div>\n\t\t                \t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n\t\t                \t</form>\n\t\t                </section>\n\t"
        })
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map