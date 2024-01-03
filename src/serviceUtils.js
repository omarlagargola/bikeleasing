import { text } from './texts';
import { mockData } from './mocks/bikeList';
import { Header } from './components/Header';
import { BikesList } from './components/BikesList';
import { Footer } from './components/Footer';

const state = {
  bikeList: [],
  selectedBikes: [],
  shoppingBagAmount: 0,
};

export const renderApp = () => {
  document.body.appendChild(Header());
  document.body.appendChild(BikesList());
  document.body.appendChild(Footer());
  initShoppingBag();
};

const initShoppingBag = () => {
  const initialAmount = getLocaleCurrency(state.shoppingBagAmount, 'de-DE', 'EUR');
  document.getElementById('shopping-bag__price').textContent = initialAmount;
};

export const newElem = (tag, prop) =>
  Object.assign(document.createElement(tag), prop);

export const fetchBikes = async() => {
  state.bikeList = mockData;
};

export const getBikes = () => {
  return state.bikeList;
};

export const toggleBikeToBag = (bike, index) => {
  if (state.selectedBikes?.find((elem) => elem.data === bike)) {
    removeSelected(bike, index);
  } else {
    addSelected(bike, index);
  }
};

const addSelected = (bike, index) => {
  const bikeItem = {};
  bikeItem.index = index;
  bikeItem.data = bike;
  state.selectedBikes.push(bikeItem);
  updateAddBikeItemStatus(true, index);
  updateBagPrice(bikeItem.data.price, true);
};

const removeSelected = (bike, index) => {
  state.selectedBikes = state.selectedBikes.filter((elem) => elem.data !== bike);
  updateAddBikeItemStatus(false, index);
  updateBagPrice(bike.price, false);
};

const updateAddBikeItemStatus = (isAdding, index) => {
  const bikeItem = document.getElementById(`bike-item__number-${index}`);
  if (isAdding) {
    bikeItem.classList.add('selected');
  } else {
    bikeItem.classList.remove('selected');
  }
  const buttonText = isAdding ? text('removeBikeText') : text('addBikeText');
  bikeItem.querySelector('.bike-toggle span').textContent = buttonText;
};

export const updateBagPrice = (price, isAdd) => {
  const { amount, locale, currency } = price;
  state.shoppingBagAmount = isAdd
    ? state.shoppingBagAmount + parseFloat(amount)
    : state.shoppingBagAmount - parseFloat(amount);
  const currentAmountString = getLocaleCurrency(
    state.shoppingBagAmount,
    locale,
    currency
  );
  document.getElementById('shopping-bag__price').textContent = currentAmountString;
};

export const filterList = (text) => {
  let bikeListToShow;
  if (text.length > 2) {
    bikeListToShow = state.bikeList.filter(
      (bike) => bike.fullName.toLowerCase().includes(text.toLowerCase())
    );
  } else {
    bikeListToShow = state.bikeList;
  }
  BikesList(bikeListToShow);
  bikeListToShow.forEach((elem, index) => {
    const isSelected = state.selectedBikes.find((item) => item.data === elem);
    if (isSelected) {
      updateAddBikeItemStatus(true, index);
    }
  });
};

export const getLocaleCurrency = (price, locale, currency) =>
  Intl.NumberFormat(locale, {style: 'currency', currency}).format(price);;
