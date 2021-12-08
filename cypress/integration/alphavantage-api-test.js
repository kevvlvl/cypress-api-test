describe('TIME_SERIES_WEEKLY Weekly', () => {

    beforeEach(() => {
        console.log("beforeEach event")
    })

    afterEach(() => {
        console.log("afterEach event")
    })

    it('Get All for GOOGL symbol', () => {

        console.log('BEGIN - init test variables')

        const symbol = 'GOOGL'
        const api_key = 'LHTLNAW45BR8C7F8' // This is NOT a secure way to store an API key. Not the purpose of this lab. Store in a secret/vault please!

        console.log('   About to perform GET request')

        cy.request(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${api_key}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.not.be.empty;
            })

        console.log('END - Completed GET request')
    })
})