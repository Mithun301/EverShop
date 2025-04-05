class AddToCartLocators{

      get productFromList() {
        return $("//span[text()='Nike zoom fly']");
      }
    
      get productSize() {
        return $("//a[normalize-space(text())='XL']");
      }
    
      get productColor() {
        return $("//a[text()='Black']");
      }
    
      get inputQtyField() {
        return $("//input[@name='qty']");
      }
    
      get buttonAddToCart() {
        return $("//button[contains(.,'ADD TO CART')]");
      }
    
      get buttonViewCartFromModal() {
        return $("//a[@class='add-cart-popup-button']");
      }
    
    

}
module.exports = new AddToCartLocators();