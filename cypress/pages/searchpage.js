class SearchPage{
    elements={
        searchtxtbox:()=>cy.get('#twotabsearchtextbox')
    }

    searchproduct(searchkeyword){
        this.elements.searchtxtbox().type(searchkeyword)
        this.elements.searchtxtbox().type('{enter}')

    }
}

export default new SearchPage()