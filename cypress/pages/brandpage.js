class BrandPage {
    elements = {        
        brandCheckbox: (brandName) => cy.get('ul.a-unordered-list')
                                        .find('span.a-size-base.a-color-base')
                                        .contains(brandName)
                                        .parent()
                                        .parent()
                                        .find('input[type="checkbox"]')
    }

    filterByBrand(brandName) {
        this.elements.brandCheckbox(brandName).check({ force: true });
    }
}

export default new BrandPage();
