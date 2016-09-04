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
        ]), 
        __metadata('design:paramtypes', [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFFckQsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsb0NBQW9DO0FBb0NwQztJQUFBO0lBRUEsQ0FBQztJQW5DRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsaWxCQWFULEVBQUMsVUFBVSxFQUFDLENBQUMsMEJBQWlCLENBQUM7WUFDaEMsTUFBTSxFQUFDLENBQUMsc01BUVAsQ0FBQztTQUNMLENBQUM7UUFFRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztTQUNoRCxDQUFDOzsrQkFBQTtJQUlGLDhCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwrQkFBdUIsMEJBRW5DLENBQUEiLCJmaWxlIjoiYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vbG9nb3V0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG4vL2ltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXV0aCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICAgICAgICAgICAgICBcdDxuYXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICBcdFx0PHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgXHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9zaWdudXAnXVwiPlNpZ251cDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vc2lnbmluJ11cIj5TaWduaW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICBcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL2xvZ291dCddXCI+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgXHRcdDwvdWw+XG4gICAgICAgICAgICAgICAgXHQ8L25hdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICAgICAgICAgICAgICBcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBgLGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBzdHlsZXM6W2BcbiAgICBcdC5yb3V0ZXItbGluay1hY3RpdmV7XG4gICAgXHRcdGNvbG9yOiM1NTU7XG4gICAgXHRcdGN1cnNvcjpkZWZhdWx0O1xuICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgXHRcdGJvcmRlcjoxcHggc29saWQgI2RkZDtcbiAgICBcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgXHR9XG4gICAgYF1cbn0pXG5cbkBSb3V0ZXMoW1xuICAgIHtwYXRoOiAnL3NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9zaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvbG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnR9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
