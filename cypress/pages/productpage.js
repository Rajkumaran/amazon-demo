class ProductPage {
    // Define element selectors as properties
    elements = {
        brandName: 'span.a-size-medium.a-color-base.a-text-normal',
        priceRecipe: '[data-cy="price-recipe"]',
        price: '.a-price .a-offscreen'
    }

    checkBrandName(brandname) {
        cy.get(this.elements.brandName).should('include.text', brandname);
    }

    verifyPricesAreWithinRange(minimumPrice) {
        cy.get(this.elements.priceRecipe).each(($el) => {
            const priceText = $el.find(this.elements.price).text(); // Assuming .a-offscreen contains the price
            const regex = /^₹[\d,]+/;
            const match = priceText.match(regex);
            let actualPrice = match ? match[0].replace('₹', '') : "";
            actualPrice = Number(actualPrice.replace(/,/g, ''));
            console.log(typeof(minimumPrice))
            // let minPrice= Number(minimumPrice.replace(/,/g, ''));
            console.log(typeof(actualPrice))
            // console.log(typeof(minPrice))
            cy.wrap(actualPrice).should('not.be.greaterThan', minimumPrice);
        });
    }
}

export default new ProductPage();
