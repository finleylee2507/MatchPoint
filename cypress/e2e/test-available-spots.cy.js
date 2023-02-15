describe('Test Spot Available decrement', () => {
  it('should decrease after join button click', () => {

    cy.visit('/')

    // Get the current value of capacity
    cy.get('#root > div > div > div:nth-child(3) > div > div.card-middle.row > div:nth-child(2) > div > div.right > h3').then($capacity => {
      const originalCapacity = parseInt($capacity.text(), 10)
      cy.log(`Original capacity: ${originalCapacity}`)

      // Click the join button
      cy.get('#root > div > div > div:nth-child(3) > div > div.card-footer > button').click()

      // // Verify that the capacity has incremented by 1
      cy.get('#root > div > div > div:nth-child(3) > div > div.card-middle.row > div:nth-child(2) > div > div.right > h3').should($newCapacity => {
        const expectedCapacity = originalCapacity - 1
        expect(parseInt($newCapacity.text(), 10)).to.equal(expectedCapacity)
      })
    })
  })
})