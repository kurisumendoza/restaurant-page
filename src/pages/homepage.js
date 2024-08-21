import { container } from '..';
import mapImg from '../assets/map.gif';

const homepageContent = `
<div id="homepage">
  <div id="banner">
    <h1>Cafe Midgard</h1>
  </div>
  <div id="main-content">
    <h2>Welcome!</h2>
    <p>
      Welcome to Cafe Midgard, located just steps away from the bustling
      central plaza of Prontera, where adventurers from all corners of
      Midgard converge. Whether you've just returned from battling in the
      Prontera Fields or are taking a well-deserved break from exploring
      the depths of the Geffen Dungeon, our doors are always open to
      heroes seeking legendary meals and camaraderie. Nestled in the heart
      of the city, our cafe offers the perfect spot to relax, share tales
      of valor, and fuel up for your next grand adventure. Come in, take a
      seat, and let the flavors of Midgard inspire your journey!
    </p>
  </div>
  <div id="hours">
    <h3>Hours</h3>
    <p>
      Sunday: 09:00-21:00 <br />
      Monday: 08:00-22:00 <br />
      Tuesday: 08:00-22:00 <br />
      Wednesday: 08:00-22:00 <br />
      Thursday: 08:00-22:00 <br />
      Friday: 08:00-22:00 <br />
      Saturday: 09:00-21:00
    </p>
  </div>
  <div id="location">
    <div>
      <h3>Visit Us!</h3>
      <p>
        <b>Cafe Midgard</b><br />
        123 Prontera Plaza<br />
        Prontera City, Midgard 10001
      </p>
    </div>
    <div>
      <img id="map-image" alt="" />
    </div>
  </div>
</div>
`;

export const homepageRender = function () {
  container.insertAdjacentHTML('afterbegin', homepageContent);

  const map = document.getElementById('map-image');
  map.src = mapImg;
};
