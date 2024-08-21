import { container } from '..';

const menuPageContent = `
  <div>
    <h1>This is a Sample Menu</h1>

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
`;

export const menuPageRender = function () {
  container.insertAdjacentHTML('afterbegin', menuPageContent);
};
