import { container } from '..';
import { logoRender } from './homepage';
import mapImg from '../assets/map.gif';

const aboutPageContent = `
  <div id="about-page">
    <div id="banner">
      <img id="logo" alt="" />
    </div>
    <div id="about-content">
      <div class="about-text">
        <p>
          At <b>Cafe Midgard</b>, located in the heart of Prontera Plaza, we offer a cozy
          retreat for adventurers from all walks of life. Whether you've just finished
          a quest or are taking a break from exploring Midgard, our cafe serves up
          legendary meals and drinks that will energize your journey. Step into our
          welcoming space, share stories with fellow heroes, and enjoy a true taste of
          Prontera!
        </p>
      </div>
      <div class="about-text">
        You can find us at <b>123 Prontera Plaza Prontera City, Midgard 10001</b> <br />
        We are open <b>Monday-Friday: 08:00-22:00 and Saturday-Sunday: 09:00-21:00</b>
        <img id="map-image" alt="" />
      </div>
      <div class="about-text">
        <b>Reserve Your Table at Cafe Midgard!</b><br />
        Planning your next adventure or celebrating a recent victory? Secure your spot
        at Cafe Midgard and enjoy a legendary dining experience in the heart of
        Prontera. Whether you're gathering with friends or seeking a quiet moment
        before your next quest, we'll make sure your table is ready. Book now and let
        us prepare the feast!
      </div>
    </div>
    <div id="footer">
      <p>Cafe Midgard</p>
    </div>
  </div>
`;

export const aboutPageRender = function () {
  container.insertAdjacentHTML('afterbegin', aboutPageContent);

  logoRender();

  const map = document.getElementById('map-image');
  map.src = mapImg;
};
