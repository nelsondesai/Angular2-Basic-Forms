import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component';
import {SubscriptionFormComponent} from './subscription-form.component';
import {SignUpFormComponent} from './signup-form.component';
import {ChangePasswordForm} from './change-password-form.component';

@Component({
    selector: 'my-app',
    template: ` 
    <h1>Contact Form</h1>
    <contact-form></contact-form>
    <h1>Subscription Form</h1>
    <subscription-form></subscription-form>
    <h1>Signup Form</h1>
    <signup-form></signup-form>
    <h1>Change Password Form</h1>
    <change-password-form></change-password-form>
    `,
    directives: [ContactFormComponent, SubscriptionFormComponent, SignUpFormComponent, ChangePasswordForm]
})
export class AppComponent {    
}