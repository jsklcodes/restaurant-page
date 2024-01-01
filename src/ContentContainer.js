import { HomePage } from './HomePage';
import { MenuPage } from './MenuPage';
import { ContactPage } from './ContactPage';

export const ContentContainer = currentPage => {
  let content = '';

  switch (currentPage) {
    case 0:
      content = HomePage();
      break;
    case 1:
      content = MenuPage();
      break;
    case 2:
      content = ContactPage();
      break;
    default:
      content = HomePage();
      break;
  }
  return `<main class="content container">
    ${content}
  </main>`;
};
