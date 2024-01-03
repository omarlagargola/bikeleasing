import { text } from '../../texts.js';
import {
  newElem,
  fetchBikes,
  getBikes,
} from '../../serviceUtils.js';
import { BikeItem } from '../BikeItem';
import { SearchBar } from '../SearchBar';

let bikes = [];

export const BikesList = (filteredBikes) => {
  init(filteredBikes);
  const bikesList = newElem('main', {
    className: 'list-content',
    innerHTML: `
      <div class="list-content__header">
        <span>${text('listHeaderText')}</span>
      </div>
      <div id="list-content__bike-items"></div>`,
  });

  bikesList.children[0].appendChild(SearchBar());
  return bikesList;
};

const init = (filteredBikes) => {
  if (!filteredBikes) {
    getBikeList();
  } else {
    renderItems(filteredBikes);
  }
};

const getBikeList = () => {
  fetchBikes()
    .then(() => {
      bikes = getBikes();
      renderItems(bikes);
    })
    .catch((err) => {
      console.error('Something went wrong', err);
    });
};

const renderItems = (bikes) => {
  const items = document.getElementById('list-content__bike-items');
  items.innerHTML = '';
  if (bikes && !bikes.length) {
    const noBikes = newElem('div', {
      className: 'no-bikes',
      innerHTML: `${text('noBikesFoundText')}`,
    })
    items.appendChild(noBikes);
  } else {
    const itemsWrapper = newElem('div', {
      id: 'bike-items-wrapper',
    });
    bikes.map((item, index) => {
      itemsWrapper.appendChild(BikeItem(item, index));
    });
    items.appendChild(itemsWrapper);
  }
};
