import {
  renderApp,
  updateBagPrice,
  getLocaleCurrency,
} from '../src/serviceUtils.js';

const samplePrice = {
  amount: '1200.00',
  currency: 'EUR',
  locale: 'de-DE',
};
const { amount, currency, locale } = samplePrice;

describe('Shopping bag', () => {
  renderApp();

  it('should increase total', () => {
    updateBagPrice(samplePrice, true);
    const expectedPrice = getLocaleCurrency(parseFloat(amount), locale, currency);
    expect(document.getElementById('shopping-bag__price').textContent).toBe(expectedPrice);
  });

  it('should drecrease total', () => {
    updateBagPrice(samplePrice, false);
    const expectedPrice = getLocaleCurrency(parseFloat(0), locale, currency);
    expect(document.getElementById('shopping-bag__price').textContent).toBe(expectedPrice);
  });
});
