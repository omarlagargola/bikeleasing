import {
  newElem,
  getLocaleCurrency,
  toggleBikeToBag,
} from '../../serviceUtils.js';
import { text } from '../../texts.js';

export const BikeItem = (bike, index) => {
  const {
    fullName,
    imagePath,
    price: { amount, currency, locale },
  } = bike;
  const bikeItem = newElem('article', {
    className: 'bike-item',
    innerHTML: `
      <p class="bike-item__name">${fullName}</p>
      <div class="bike-item__info" data-index=${index}>
        <div id="bike-item__number-${index}" class="bike-selection-wrapper">
          <img class="bike-img" alt="${fullName}" src="..${imagePath}" loading="lazy" width="300" height="250"></img>
          <div class="bike-price">
            ${getLocaleCurrency(parseFloat(amount), locale, currency)}
          </div>
          <div class="bike-toggle">
            <span>${text('addBikeText')}</span>
          </div>
        </div>
      </div>`,
  });

  const toggle = bikeItem.getElementsByClassName('bike-item__info')[0];
  toggle.addEventListener('click', toggleSelectBike);
  toggle.bike = bike;
  return bikeItem;
};

const toggleSelectBike = (e) => {
  toggleBikeToBag(e.currentTarget?.bike, e.currentTarget.dataset.index);
};
