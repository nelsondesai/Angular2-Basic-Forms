System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                UsernameValidators.shouldBeUnique = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == 'nelson') {
                                resolve({ "shouldBeUnique": true });
                            }
                            else {
                                resolve(null);
                            }
                        }, 1000);
                    });
                };
                UsernameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0) {
                        return { 'cannotContainSpace': true };
                    }
                    else {
                        return null;
                    }
                };
                // Change Password Validations
                UsernameValidators.complexPassword = function (control) {
                    var minLength = 5;
                    // We bypass this validation rule if the field is empty, assuming
                    // it is valid. At this point, the required validator will kick in
                    // and asks the user to type a value. With this technique, we'll 
                    // display only a single validation message at a time, rather than:
                    // 
                    // * This field is required.
                    // * Password doesn't match complexity rules.
                    //
                    if (control.value == '')
                        return null;
                    if (control.value.length < minLength)
                        // Note that I'm returning an object, instead of:
                        // 
                        // return { complexPassword: true }
                        //
                        // This will give the client additional data about the 
                        // validation and why it failed. 
                        return {
                            complexPassword: {
                                minLength: minLength
                            }
                        };
                    return null;
                };
                UsernameValidators.passwordsShouldMatch = function (group) {
                    var newPassword = group.find('newPassword').value;
                    var confirmPassword = group.find('confirmPassword').value;
                    if (newPassword == '' || confirmPassword == '')
                        return null;
                    if (newPassword != confirmPassword)
                        return { passwordsShouldMatch: true };
                    return null;
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=usernameValidators.js.map