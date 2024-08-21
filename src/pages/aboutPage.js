import { container } from '..';

const aboutPageContent = `
  <div>
    <h1>This is a Sample About Page</h1>
    <h2>You can contact us here: +1234567890</h2>
  </div>
`;

export const aboutPageRender = function () {
  container.insertAdjacentHTML('afterbegin', aboutPageContent);
};
