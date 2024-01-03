import {
  renderApp,
  filterList,
} from '../src/serviceUtils.js';

describe('Shopping bag', () => {
  renderApp();

  it('should filter 6 items', () => {
    filterList('bike');
    expect(document.getElementsByClassName('bike-item').length).toBe(6);
  });

  it('should filter 2 items', () => {
    filterList('cool');
    expect(document.getElementsByClassName('bike-item').length).toBe(2);
  });

  it('should filter 1 item', () => {
    filterList('awesome');
    expect(document.getElementsByClassName('bike-item').length).toBe(1);
  });

  it('should filter no item', () => {
    filterList('blablabla');
    expect(document.getElementsByClassName('bike-item').length).toBe(0);
  });
});