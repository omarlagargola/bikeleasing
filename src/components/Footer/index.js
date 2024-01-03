import { text } from '../../texts.js';
import { newElem } from '../../serviceUtils.js';

export const Footer = () => {
  const footer = newElem('footer', {
    className: 'footer',
    innerHTML: `<p class="footer__text">${text('footerText')}</p>`,
  });
  return footer;
};
