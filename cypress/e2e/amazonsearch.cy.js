import searchPage from '../pages/searchpage.js'
import brandPage from '../pages/brandpage.js'
import PriceRange from '../pages/PriceRange.js';
import * as allure from "allure-cypress";
import { Severity } from "allure-js-commons";
import productPage from '../pages/productpage.js';

describe('template spec', () => {
  const brandname='POCO'
  const searchkey="mobiles under 15000"

  before(()=>{
    cy.task('clearAllureResults');
  });


  beforeEach(()=>{
    cy.visit('/')
  });

  
  it('search the prdouct', () => {
        allure.severity(Severity.CRITICAL);       
        searchPage.searchproduct(searchkey)
        
  })

  it('filter the result with the brand key',()=>{      
        searchPage.searchproduct(searchkey)
        brandPage.filterByBrand(brandname)
        
  });

it('set price range',()=>{
        
        searchPage.searchproduct(searchkey)
        brandPage.filterByBrand(brandname)
        // Set the lower bound of the price range
        PriceRange.setLowerBound(780)

       // Get and log the minimum price
        let minimumPrice;
        PriceRange.getMinPrice().then((minPrice) => {
          minimumPrice = Number(minPrice.replace(/,/g, '').replace('₹', ''));
         // Cypress.env('minimumPrice', minimumPrice);

          // Log the minimum price for verification
          console.log("Minimum Price:", minimumPrice);

          // Use the ProductPage methods
          productPage.checkBrandName(brandname);
          productPage.verifyPricesAreWithinRange(minimumPrice);
        });

        // Get and log the maximum price
        PriceRange.getMaxPrice().then((maxPrice) => {          
          Cypress.env("maxPrice",maxPrice)
        });

});

});

