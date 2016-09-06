"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var logout_component_1 = require("./logout.component");
var router_1 = require("@angular/router");
//import {Message} from "./message";
var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            template: "\n                <header class=\"row spacing\">\n                \t<nav class=\"col-md-8 col-md-offset-2\">\n                \t\t<ul class=\"nav nav-tabs\">\n                \t\t\t<li><a [routerLink]=\"['./signup']\">Signup</a></li>\n                \t\t\t<li><a [routerLink]=\"['./signin']\">Signin</a></li>\n                \t\t\t<li><a [routerLink]=\"['./logout']\">Logout</a></li>\n                \t\t</ul>\n                \t</nav>\n                </header>\n                <div class=\"row spacing\">\n                \t<router-outlet></router-outlet>\n                </div>\n    ", directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n    \t.router-link-active{\n    \t\tcolor:#555;\n    \t\tcursor:default;\n    \t\tbackground-color:#fff;\n    \t\tborder:1px solid #ddd;\n    \t\tborder-bottom-color: transparent;\n    \t}\n    "]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;
//# sourceMappingURL=authentication.component.js.map