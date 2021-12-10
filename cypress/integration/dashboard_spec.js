describe('Box Office Deetz Test', () => {

    beforeEach(() => {
        cy.intercept('GET', '/api/v2/movies', 
        { fixture: 'allMovies.json' })
        cy.visit('http://localhost:3000');
    });

    it('the header should contain the name of the application and the clapper logo image', () => {
        cy.get('div[class="header"]')
        .get('img')
        .get('h1[class="headerTitle"]')
        .contains('Box Office Deetz')
    });

    it('should have a container component for all movie cards', () => {
        cy.get('main[class="movieContainer"]')
        .children('article[class="movieCard"]')
        .children('img')
        .siblings('h2')
        .siblings('p[class="movieCardRating"]')
        .siblings('p[class="movieCardReleaseDate"]')
    })


    // user flow we need to test:
    // test the ability to load a movie details page 
    // -- cy.intercept write mock response for sampleMovie - use sampleMovie fixture
    // then visit the URL for that particular sampleMovie
    // verify that the child elements loaded successfully with the
    // right values for that particular movie

    // user flow:
    // we want to be able to test that FROM a movie detail page, we can
    // click CLOSE and return to the main page. 

    // user flow: 
    // we want to test that a user can successfully use the back and forward
    // buttons in their browser to navigate various paths

    // user flow:
    // we want to be able to test that if a user enters a particular movie
    // path/URL that they load onto the page correctly. 


    // user flow:
    // we want to be able to test that the user can REFRESH the page and 
    // still see the same content on both the Home path and the details paths

    // 

});