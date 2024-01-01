import { Header } from './Header.js';
import { ContentContainer } from './ContentContainer.js';
import './styles.css';

const contentDiv = document.querySelector('#content');

contentDiv.insertAdjacentHTML('afterbegin', Header());

const header = document.querySelector('.header');

let currentPage = 0;

header.insertAdjacentHTML('afterend', ContentContainer(currentPage));
