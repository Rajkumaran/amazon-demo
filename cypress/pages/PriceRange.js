class PriceRange {
    get lowerBoundSlider() {
      return cy.get('#p_36\\/range-slider_slider-item_lower-bound-slider');
    }
  
    get minPriceLabel() {
      return cy.get('label[for="p_36/range-slider_slider-item_lower-bound-slider"] .a-size-base.a-color-base.a-text-bold');
    }
  
    get maxPriceLabel() {
      return cy.get('label[for="p_36/range-slider_slider-item_upper-bound-slider"] .a-size-base.a-color-base.a-text-bold');
    }
    
    get goButton(){
        return cy.get('input[aria-label="Go - Submit price range"]')
    }
    setLowerBound(value) {
      this.lowerBoundSlider.scrollIntoView().as('slider');
      cy.get('@slider').invoke('css', 'pointer-events', 'auto');
      cy.get('@slider').invoke('val', value).trigger('input');
      cy.wait(10000);
      this.goButton.click({force:true})
    }
  
    getMinPrice() {
      return this.minPriceLabel.invoke('text').then((minPriceText) => {
        const minPrice = minPriceText.replace(/₹|,/g, ''); // Remove currency symbol and commas
        return cy.wrap(minPrice); // Ensure Cypress command chain continuity
      });
    }
  
    getMaxPrice() {
      return this.maxPriceLabel.invoke('text').then((maxPriceText) => {
        const maxPrice = maxPriceText.replace(/₹|,|\+/g, ''); // Remove currency symbol, commas, and plus sign
        return cy.wrap(maxPrice); // Ensure Cypress command chain continuity
      });
    }
  }
  
  export default new PriceRange();
  