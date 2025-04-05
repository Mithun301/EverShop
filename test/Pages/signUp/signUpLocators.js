class SingUpLocators{
    get profileIcon() {
        return $("//a[contains(@href,'/account')]");
    }

    get clickCreateAccount(){
        return $('//a[text()="Create an account"]');
    }
    get inputFullName(){
        return $("//input[@name='full_name']");

    }
    get inputEmail(){
        return $("//input[@name='email']");
    }
    get inputPassword(){
        return $("//input[@name='password']");
    }
    get clickSignUp(){
        return $("//button[@type='submit']")
    }
}
module.exports = new SingUpLocators();