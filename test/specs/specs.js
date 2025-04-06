const addToCartAction = require("../Pages/addToCart/addToCartAction");
//const searchAction = require("../Pages/search/searchAction");
const searchAction = require("../Pages/search/searchAction");
const signUpAction = require("../Pages/signUp/signUpAction");
const productName = "Nike";
const Qty ="2";
const fullName ="Nick";
const Email ="Nick@ymail.com";
const Password ="Nick111";

const { expect } = require('chai');

describe("Demo evershop site product purchase journey", () => {
    it("Should able to successfully search product", async () => {

      await searchAction.clickOnSearchIcon();
      await searchAction.enterSearchItemName(productName);
      await browser.keys("Enter");
      const product = await $("//span[text()='Nike zoom fly']");
      const text = await product.getText();
      expect (text).to.equal("Nike zoom fly");


    });


    it("Should able to successfully add product in the cart", async () => {

        await addToCartAction.clickOnProductfromList(productName);
        await addToCartAction.selectProductSize();
        await browser.pause(3000);

        await addToCartAction.selectColor();
        await browser.pause(3000);

        await addToCartAction.enterProductQty(Qty);
        await browser.pause(3000);

        await addToCartAction.clickOnAddToCartButton();
        await browser.pause(3000);

        await addToCartAction.clickOnViewCartButton();
    });


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