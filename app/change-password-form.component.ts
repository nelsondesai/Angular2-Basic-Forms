import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators,FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';
@Component({
    selector: 'change-password-form',
    templateUrl: 'app/change-password-form.component.html'
})
export class ChangePasswordForm {
    form: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.form = fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required,
                UsernameValidators.complexPassword
            ])],
            // Note that here is no need to apply complexPassword validator
            // to confirm password field. It's sufficient to apply it only to
            // new password field. Next, passwordsShouldMatch validator
            // will compare confirm password with new password and this will
            // implicitly enforce that confirm password should match complexity
            // rules. 
            confirmPassword: ['', Validators.required]
        }, { validator: UsernameValidators.passwordsShouldMatch });
    }
    changePassword()
    {
     var oldPassword = this.form.find('oldPassword');
        if (oldPassword.value != '1234') 
            oldPassword.setErrors({ validOldPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");
    }
}