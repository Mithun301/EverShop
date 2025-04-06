
const addToCartAction = require("../Pages/addToCart/addToCartAction");
const searchAction  = require("../Pages/search/searchAction");
const Qty = "2";
const productName = "Nike";

describe("Demo evershop site product purchase journey", () => {
it("Should able to successfully add product in the cart", async () => {

        
        await searchAction.clickOnSearchIcon();
        await searchAction.enterSearchItemName(productName);
        await browser.keys("Enter");
        await addToCartAction.clickOnProductfromList(productName);
        await browser.pause(3000);
        const textElement = await $("//h1[@class='product-single-name' and text()='Nike zoom fly']");
        const  text =  await textElement.getText();
        expect(text).toEqual('Nike Zoom Fly');
        await browser.pause(3000);

        await addToCartAction.selectProductSize();
        await browser.pause(3000);

        await addToCartAction.selectColor();
        await browser.pause(3000);
        const imageElement = await $("//img[contains(@src, 'plv8531-Black-single.png')]");
        const isDisplayed = await imageElement.isDisplayed();
        expect(isDisplayed).toBe(true);
        const imageSource = await imageElement.getAttribute('src');
        expect (imageSource).toEqual('https://demositefiles.blob.core.windows.net/images/catalog/5749/4127/plv8531-Black-single.png');

        await browser.pause(3000);

        await addToCartAction.enterProductQty(Qty);
        await browser.pause(3000);

        await addToCartAction.clickOnAddToCartButton();
        await browser.pause(3000);

        await addToCartAction.clickOnViewCartButton();
    });
});