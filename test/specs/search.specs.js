//const { expect } = require("chai");
const searchAction = require("../Pages/search/searchAction");
const productName = "Nike";
describe("Demo evershop site product purchase journey", () => {
    it("Should able to successfully search product", async () => {

      await searchAction.clickOnSearchIcon();
      await searchAction.enterSearchItemName(productName);
      await browser.keys("Enter");
      const textElement = await $("//span[text()='Nike zoom fly']");
      const  text =  await textElement.getText();
      expect(text).toEqual('Nike zoom ');
      await browser.pause(3000);

    });
  // it('should verify product names on the page', async () => {
   // await searchAction.clickOnSearchIcon();
   // await searchAction.enterSearchItemName(productName);
   // await browser.keys("Enter");

    //const productElements = await $(" //span[contains(@class, 'name')] | //div[contains(@class, 'product-name')])]");
    //const expectdProductNames =['Nike revolution 5','Nike react infinity run flyknit','Nike court vision low','Nike zoom fly','Nike odyssey react flyknit 2','Nike drop-type premium', 'Nike court vintage premium'   ,   'Nike air zoom pegasus 35','Nike air presto by you','Nike varsity'];
    //for (let i =0; i<9;i++){
    //  const productName1 = await productElements.getText();
      //expect(productName1).toEqual(expectdProductNames);
 //   }
   
  
 // });

});