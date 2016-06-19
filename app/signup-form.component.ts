import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';
@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    form = new ControlGroup(
        {
            username: new Control('', Validators.compose(
                [
                    Validators.required,
                    UsernameValidators.cannotContainSpace
                ]),
                UsernameValidators.shouldBeUnique
                ),
            password: new Control('', Validators.required)
        }
    );
    signup()
    {
        // result = authService.login(this.form.value);
        this.form.find('username').setErrors({
            inValidLogin: true,
        });
        console.log(this.form.value);
    }
}