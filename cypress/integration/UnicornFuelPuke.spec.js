const testData = require('../../example_api_response.json');

describe('Viewing the root page', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      response: testData,
      url: 'https://api.carbonintensity.org.uk/generation',
    });

    cy.visit('/');
  });

  it('should load the page', () => {
    cy.queryByText('KiwiPower Tech Test').should('exist');
  });

  it('should all the unicorn puke fuels in order of percentage', () => {
    const sortedFuels = testData.data.generationmix
      .sort((a, b) => a.perc - b.perc)
      .reverse();

    cy.queryAllByTestId('components/UnicornPukeStream').each(
      (stream, index) => {
        const { fuel, perc } = sortedFuels[index];

        expect(stream.text()).to.equal(`${fuel} (${perc}%)`);
      }
    );
  });
});
