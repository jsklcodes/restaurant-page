import { Header } from './Header.js';
import { ContentContainer } from './ContentContainer.js';
import './styles.css';

const contentDiv = document.querySelector('#content');

contentDiv.insertAdjacentHTML('afterbegin', Header());

const navButtons = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

let currentPage = 0;

navButtons.forEach(navButton => {
  navButton.addEventListener('click', event => {
    const clickedButton = event.currentTarget;
    currentPage = +clickedButton.dataset.page;

    navButtons.forEach(navButton => navButton.classList.remove('active'));

    clickedButton.classList.add('active');

    header.nextElementSibling.remove();
    header.insertAdjacentHTML('afterend', ContentContainer(currentPage));
  });
});

header.insertAdjacentHTML('afterend', ContentContainer(currentPage));
