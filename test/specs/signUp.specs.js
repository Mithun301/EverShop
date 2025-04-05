const signUpAction = require("../Pages/signUp/signUpAction");
const fullName ="Nick";
const Email ="Nick@ymail.com";
const Password ="Nick111";
describe("Demo evershop site product purchase journey", () => {

it("Should able to successfully Sign Up", async () => {
        await signUpAction.clickOnProfileIcon();
        await signUpAction.selectCreatAccount();
        await signUpAction.enterFullName(fullName);
        await browser.pause(3000);

        await signUpAction.enterEmail(Email);
        await browser.pause(3000);

        await signUpAction.enterPassword(Password);
        await browser.pause(3000);

        await signUpAction.clickOnSubmit();

    });





});