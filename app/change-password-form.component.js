System.register(['angular2/core', 'angular2/common', './usernameValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, usernameValidators_1;
    var ChangePasswordForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (usernameValidators_1_1) {
                usernameValidators_1 = usernameValidators_1_1;
            }],
        execute: function() {
            ChangePasswordForm = (function () {
                function ChangePasswordForm(fb) {
                    this.form = fb.group({
                        oldPassword: ['', common_1.Validators.required],
                        newPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                usernameValidators_1.UsernameValidators.complexPassword
                            ])],
                        // Note that here is no need to apply complexPassword validator
                        // to confirm password field. It's sufficient to apply it only to
                        // new password field. Next, passwordsShouldMatch validator
                        // will compare confirm password with new password and this will
                        // implicitly enforce that confirm password should match complexity
                        // rules. 
                        confirmPassword: ['', common_1.Validators.required]
                    }, { validator: usernameValidators_1.UsernameValidators.passwordsShouldMatch });
                }
                ChangePasswordForm.prototype.changePassword = function () {
                    var oldPassword = this.form.find('oldPassword');
                    if (oldPassword.value != '1234')
                        oldPassword.setErrors({ validOldPassword: true });
                    if (this.form.valid)
                        alert("Password successfully changed.");
                };
                ChangePasswordForm = __decorate([
                    core_1.Component({
                        selector: 'change-password-form',
                        templateUrl: 'app/change-password-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePasswordForm);
                return ChangePasswordForm;
            }());
            exports_1("ChangePasswordForm", ChangePasswordForm);
        }
    }
});
//# sourceMappingURL=change-password-form.component.js.map