const signUpLocators = require("./signUpLocators");

class SignUpAction{

    async clickOnProfileIcon(){
        await signUpLocators.profileIcon.click();

    }
    async selectCreatAccount(){
        await signUpLocators.clickCreateAccount.click();
    }

    async enterFullName(fullName){
        await signUpLocators.inputFullName.setValue(fullName);
    }
    async enterEmail(Email){
        await signUpLocators.inputEmail.setValue(Email);
    }
    async enterPassword(Password){
        await signUpLocators.inputPassword.setValue(Password);
    }
    async clickOnSubmit(){
        await signUpLocators.clickSignUp.click();
    }
} 
module.exports = new SignUpAction();