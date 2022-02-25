//I was trying to get the heading from the link and the heading from the page and wanted to test if they
//are equal.

// the link in the about to "Careers" does not redirect you to the link the assignment wanted me to 
//assess equality hence i checked only if it containts "careers".

describe("Test Careers",()=> {
    it("Navigates to HiredScore/careers",()=>
    {
        let PrevHeading = "";
        cy.visit("https://www.hiredscore.com/");
        cy.get("#w-dropdown-list-3").invoke('show');
        cy.contains("Careers").click();
        cy.url().should("include", "careers");
        cy.get(".career-link-block-row").first().get(".job-grid-title:first").invoke('text')
        .then((mytext)=>{PrevHeading = mytext});
        cy.get(".career-link-block-row").first().click();
        cy.get(".career-hero-heading").invoke("text").then((currentHeading) =>{
            expect(currentHeading).to.equal(PrevHeading);
        })
        
    })
});