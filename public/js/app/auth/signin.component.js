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
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHVCQUEwRCxpQkFBaUIsQ0FBQyxDQUFBO0FBc0I1RTtJQUdDLHlCQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFFLENBQUM7SUFFdEMsa0NBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDO29CQUM5QixtQkFBVSxDQUFDLFFBQVE7b0JBQ25CLElBQUksQ0FBQyxPQUFPO2lCQUNaLENBQUMsQ0FBQztZQUNILFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8saUNBQU8sR0FBZixVQUFnQixPQUFnQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3JFLE1BQU0sQ0FBQyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsQ0FBQTtRQUMxQixDQUFDO0lBQ0YsQ0FBQztJQTNDRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUMsV0FBVztZQUNwQixRQUFRLEVBQUMsczRCQWVSO1NBQ0QsQ0FBQzs7dUJBQUE7SUEwQkYsc0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLHVCQUFlLGtCQXdCM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlcixDb250cm9sR3JvdXAsQ29udHJvbCxWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6J215LXNpZ25pbicsXG5cdHRlbXBsYXRlOmBcblx0XHQgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cblx0XHQgICAgICAgICAgICAgICAgXHQ8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiA+XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdCAgICAgICAgICAgICAgICBcdFx0XHQ8bGFiZWwgZm9yPVwiZW1haWxcIj5FLW1haWw8L2xhYmVsPlxuXHRcdCAgICAgICAgICAgICAgICBcdFx0XHQ8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHQgICAgICAgICAgICAgICAgXHRcdDwvZGl2PlxuXG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdCAgICAgICAgICAgICAgICBcdFx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHRcdDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuXHRcdCAgICAgICAgICAgICAgICBcdFx0PC9kaXY+XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+U2lnbiBVcDwvYnV0dG9uPlxuXHRcdCAgICAgICAgICAgICAgICBcdDwvZm9ybT5cblx0XHQgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXHRgXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0bXlGb3JtOiBDb250cm9sR3JvdXA7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIpe31cblxuXHRvblN1Ym1pdCgpe1xuXHRcdGNvbnNvbGUubG9nKHRoaXMubXlGb3JtLnZhbHVlKTtcblx0fVxuXG5cdG5nT25Jbml0KCl7XG5cdFx0dGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG5cdFx0XHRlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuXHRcdFx0XHRWYWxpZGF0b3JzLnJlcXVpcmVkLFxuXHRcdFx0XHR0aGlzLmlzRW1haWxcblx0XHRcdF0pXSxcblx0XHRcdHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGlzRW1haWwoY29udHJvbDogQ29udHJvbCk6e1tzOnN0cmluZ106Ym9vbGVhbn17XG5cdFx0aWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKC9bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dKy5bQS1aXXsyLDR9L2lnbSkpe1xuXHRcdFx0cmV0dXJuIHtpbnZhbGlkTWFpbDp0cnVlfVxuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
