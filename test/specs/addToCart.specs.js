
const addToCartAction = require("../Pages/addToCart/addToCartAction");
const Qty = "2";
describe("Demo evershop site product purchase journey", () => {
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
});