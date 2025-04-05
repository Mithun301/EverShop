const addToCartLocators = require("./addToCartLocators");
class AddToCartAction{
    async clickOnProductfromList(productName){
        await addToCartLocators.productFromList.click();
    }
    async selectProductSize(){
        await addToCartLocators.productSize.click();
    }
    async selectColor(){
        await addToCartLocators.productColor.click();
    
    }
    async enterProductQty(Qty){
        await addToCartLocators.inputQtyField.setValue(Qty)
    }
    async clickOnAddToCartButton(){
        await addToCartLocators.buttonAddToCart.click();
    }
    async clickOnViewCartButton(){
        await addToCartLocators.buttonViewCartFromModal.click();
    }



} 
module.exports = new AddToCartAction();