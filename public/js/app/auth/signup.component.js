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
var SignupComponent = (function () {
    function SignupComponent(_fb) {
        this._fb = _fb;
    }
    SignupComponent.prototype.onSubmit = function () {
        console.log(this.myForm.value);
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    SignupComponent.prototype.isEmail = function (control) {
        if (!control.value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)) {
            return { invalidMail: true };
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'my-signup',
            template: "\n\t\t                <section class=\"col-md-8 col-md-offset-2\">\n\t\t                \t<form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\" >\n\t\t                \t\t<div class=\"form-group\">\n\t\t                \t\t\t<label for=\"firstName\">First Name</label>\n\t\t                \t\t\t<input [ngFormControl]=\"myForm.find('firstName')\" type=\"text\" id=\"firstName\" class=\"form-control\">\n\t\t                \t\t</div>\n\n\t\t                \t\t<div class=\"form-group\">\n\t\t                \t\t\t<label for=\"lastName\">Last Name</label>\n\t\t                \t\t\t<input [ngFormControl]=\"myForm.find('lastName')\" type=\"text\" id=\"lastName\" class=\"form-control\">\n\t\t                \t\t</div>\n\n\t\t                \t\t<div class=\"form-group\">\n\t\t                \t\t\t<label for=\"email\">E-mail</label>\n\t\t                \t\t\t<input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n\t\t                \t\t</div>\n\n\t\t                \t\t<div class=\"form-group\">\n\t\t                \t\t\t<label for=\"password\">Password</label>\n\t\t                \t\t\t<input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n\t\t                \t\t</div>\n\t\t                \t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n\t\t                \t</form>\n\t\t                </section>\n\t"
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHVCQUEwRCxpQkFBaUIsQ0FBQyxDQUFBO0FBZ0M1RTtJQUdDLHlCQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFFLENBQUM7SUFFdEMsa0NBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDNUIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQzlCLG1CQUFVLENBQUMsUUFBUTtvQkFDbkIsSUFBSSxDQUFDLE9BQU87aUJBQ1osQ0FBQyxDQUFDO1lBQ0gsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1NBQ25DLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxpQ0FBTyxHQUFmLFVBQWdCLE9BQWdCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDckUsTUFBTSxDQUFDLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxDQUFBO1FBQzFCLENBQUM7SUFDRixDQUFDO0lBdkRGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBQyxXQUFXO1lBQ3BCLFFBQVEsRUFBQyx3OENBeUJSO1NBQ0QsQ0FBQzs7dUJBQUE7SUE0QkYsc0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLHVCQUFlLGtCQTBCM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlcixDb250cm9sR3JvdXAsQ29udHJvbCxWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6J215LXNpZ251cCcsXG5cdHRlbXBsYXRlOmBcblx0XHQgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cblx0XHQgICAgICAgICAgICAgICAgXHQ8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiA+XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdCAgICAgICAgICAgICAgICBcdFx0XHQ8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHRcdDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZmlyc3ROYW1lJylcIiB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHQgICAgICAgICAgICAgICAgXHRcdDwvZGl2PlxuXG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdCAgICAgICAgICAgICAgICBcdFx0XHQ8bGFiZWwgZm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuXHRcdCAgICAgICAgICAgICAgICBcdFx0XHQ8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2xhc3ROYW1lJylcIiB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuXHRcdCAgICAgICAgICAgICAgICBcdFx0PC9kaXY+XG5cblx0XHQgICAgICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHRcdDxsYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDwvbGFiZWw+XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHRcdDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuXHRcdCAgICAgICAgICAgICAgICBcdFx0PC9kaXY+XG5cblx0XHQgICAgICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHRcdDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cblx0XHQgICAgICAgICAgICAgICAgXHRcdFx0PGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG5cdFx0ICAgICAgICAgICAgICAgIFx0XHQ8L2Rpdj5cblx0XHQgICAgICAgICAgICAgICAgXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XG5cdFx0ICAgICAgICAgICAgICAgIFx0PC9mb3JtPlxuXHRcdCAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cdGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRteUZvcm06IENvbnRyb2xHcm91cDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlcil7fVxuXG5cdG9uU3VibWl0KCl7XG5cdFx0Y29uc29sZS5sb2codGhpcy5teUZvcm0udmFsdWUpO1xuXHR9XG5cblx0bmdPbkluaXQoKXtcblx0XHR0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcblx0XHRcdGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblx0XHRcdGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuXHRcdFx0ZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcblx0XHRcdFx0VmFsaWRhdG9ycy5yZXF1aXJlZCxcblx0XHRcdFx0dGhpcy5pc0VtYWlsXG5cdFx0XHRdKV0sXG5cdFx0XHRwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOntbczpzdHJpbmddOmJvb2xlYW59e1xuXHRcdGlmICghY29udHJvbC52YWx1ZS5tYXRjaCgvW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXSsuW0EtWl17Miw0fS9pZ20pKXtcblx0XHRcdHJldHVybiB7aW52YWxpZE1haWw6dHJ1ZX1cblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
