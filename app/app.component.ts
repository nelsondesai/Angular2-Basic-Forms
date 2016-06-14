import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component';
import {SubscriptionFormComponent} from './subscription-form.component';


@Component({
    selector: 'my-app',
    template: ` <contact-form></contact-form><subscription-form></subscription-form>`,
    directives: [ContactFormComponent, SubscriptionFormComponent]
})
export class AppComponent {    
}