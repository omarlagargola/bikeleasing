import { newElem } from '../../serviceUtils.js';

export const ShoppingBag = () => {
  const shoppingBag = newElem('div', {
    className: 'shopping-bag',
    innerHTML: `
      <span id="shopping-bag__price"></span>
      <img id="shopping-bag__icon" src="./assets/shoppingBag.webp" alt="shoppingBag" height="35" width="35" />`,
  });
  return shoppingBag;
};
