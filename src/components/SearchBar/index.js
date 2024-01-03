import { text } from '../../texts.js';
import { newElem, filterList } from '../../serviceUtils.js';

export const SearchBar = () => {
  const searchBar = newElem('div', {
    className: 'search-bar-wrapper',
    innerHTML: `<input class="search-bar" id="filter-input" placeholder="${text('inputPlaceholderText')}" />`,
  });
  searchBar.addEventListener('input', inputChange);
  return searchBar;
};

const inputChange = (e) => {
  filterList(e.target.value);
};
