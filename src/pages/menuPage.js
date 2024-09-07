import { container } from '..';
import { logoRender } from './homepage';

const menuPageContent = `
  <div id="menu-page">
    <div id="banner">
      <img id="logo" alt="" />
    </div>
    <div id="menu-content">
      <h1>Menu</h1>
      <div id="menu-list"></div>
    </div>
    <div id="footer">
      <p>Cafe Midgard</p>
    </div>
  </div>
`;

// menuImgsArr

export const menuPageRender = function () {
  container.insertAdjacentHTML('afterbegin', menuPageContent);

  logoRender();

  const menuList = document.getElementById('menu-list');

  const menuImgs = require.context('../assets/menu', false, /\.png$/);

  const formatTitle = function (title) {
    title = title.replace('.png', '').replace(/-/g, ' ');
    return title.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const menuImgsArr = menuImgs.keys().map((img) => {
    return {
      path: menuImgs(img).default,
      title: formatTitle(img.replace('./', '')),
    };
  });

  menuImgsArr.forEach(({ path, title }) => {
    const imgWrapper = document.createElement('div');
    const menuImg = document.createElement('img');
    menuImg.src = path;

    const imgTitle = document.createElement('span');
    imgTitle.textContent = title;

    imgWrapper.appendChild(menuImg);
    imgWrapper.appendChild(imgTitle);
    menuList.appendChild(imgWrapper);
  });
};
