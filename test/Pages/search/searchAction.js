const searchLocators = require( "./searchLocators");
class SearchAction{
    async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();

    }
    async enterSearchItemName(productName){
        await searchLocators.searchInputField.setValue(productName)
    }



}
module.exports = new SearchAction();