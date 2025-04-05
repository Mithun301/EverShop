describe('Text Verification Test', () => {
    it('should verify the correct text is displayed', async () => {
        
        await browser.url('https://demo.evershop.io/');
        await browser.pause(2000);
        await $("//a[contains(@class,'search-icon')]").click();
        await $("//input[@placeholder='Search']").setValue("Nike");
        await browser.keys("Enter");

        
        const textElement = await $("//span[text()='Nike zoom fly']"); 
        const text = await textElement.getText();

        
        expect(text).toHaveText('Nike zoom '); 
    });
});
