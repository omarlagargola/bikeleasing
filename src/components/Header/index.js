import { ShoppingBag } from '../ShoppingBag';
import { newElem } from '../../serviceUtils.js';

export const Header = () => {
  const header = newElem('header', {
    className: 'header',
    innerHTML: `
      <div class="header__brand">
        <img src="./assets/logo-bikeleasing.svg" alt="logo" height="90" width="90" />
      </div>
      <div class="header__shopping-bag-wrapper"></div>`,
  });
  header.children[1].appendChild(ShoppingBag());
  return header;
};
