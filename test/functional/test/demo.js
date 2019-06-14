
// var mock = require("../../mocks/testDATA/locator") 
var mock = require("../../mocks/testDATA/locator");
var url = "https://storefront:movado123@dev13-na-movadogroup.demandware.net/s/MovadoUS/en_US/home";

    describe('Test Suite 1 - Movado Homepage ', () =>
    {    it ('| TS1-TC1 - OPEN THE PAGE', () => 
        {
            browser.url(url);
            //browser.takeSnapshot("This is HOME PAGE");
            browser.pause(5000);
            console.log("Homepage is loaded successfully");
        });
         it ('| TS1-TC2 - OPEN THE popUP', () => 
                              
	        {    
                //var abc = "From Movado.com you can only ship to delivery addresses in the USA";
	            //const elem = $('.pt-3');
                //console.log(elem.getText());
                
                browser.click(mock.continuePopup);
                browser.pause(5000);
                console.log("CONTINUE TO POPUP button is clicked successfully");
                //assert.equal(elem, abc, 'String matched');
                // browser.click()
                });
                    
    });
   
        describe('Test Suite 2 - Movado - Category Search', () =>
            {    it ('TS2-TC1 | Hover Shop Watches & Clicking Mens Watches', () => 
                {
                   // browser.moveTo(mock.shopWatches);
        
                    console.log("redirecting to Men Watches");
                    browser.url("https://storefront:movado123@dev13-na-movadogroup.demandware.net/s/MovadoUS/en_US/shop-watches/mens-designs/");
                    browser.pause(5000);
                    console.log("Now, Clicking Men Watches");
                    browser.click(mock.thirdProduct);
                });

                it ('| TS2-TC2  Add to Cart', () => 
                {
                    //browser.click(mock.shopWatches_mens_category);
                     browser.click(mock.addToCartButton);
                    console.log("Product added in the cart");
                    browser.pause(3000);
                    browser.click(mock.continueCheckout);
                    browser.pause(3000);
                });

   	
        
            });

    