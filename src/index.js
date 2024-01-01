import { Header } from './Header.js';
import './styles.css';

const contentDiv = document.querySelector('#content');

contentDiv.insertAdjacentHTML('afterbegin', Header());
