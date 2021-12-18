import React, { Component } from 'react';

// Components
import Profiles from './Profiles';

const profileList1 = [
  {
    name: 'Damian Lillard',
    team: 'Portland Trailblazers',
    image: 'https://ftw.usatoday.com/wp-content/uploads/sites/90/2019/04/screen-shot-2019-04-23-at-11.17.38-pm.jpg?w=1000&h=600&crop=1',
    link: 'https://www.espn.com/nba/player/_/id/6606/damian-lillard'
  },
  {
    name: 'Steph Curry',
    team: 'Golden State Warriors',
    image: 'https://pbs.twimg.com/media/CjOzCsAWEAEJnoO.jpg',
    link: 'https://www.espn.com/nba/player/_/id/3975/stephen-curry'
  },
  {
    name: 'Russell Westbrook',
    team: 'Los Angeles Lakers',
    image: 'https://images.daznservices.com/di/library/sporting_news/64/1d/russell-westbrook-ftr-gettyjpg_1u6xpmlykrhih1wvi4xvztu4t2.jpg?t=494273898&quality=100',
    link: 'https://www.espn.com/nba/player/_/id/3468/russell-westbrook'
  }
]

const profileList2 = [
  {
    name: 'Trae Young',
    team: 'Atlanta Hawks',
    image: 'https://www.bardown.com/polopoly_fs/1.1531089!/fileimage/httpImage/image.jpeg_gen/derivatives/landscape_620/h-t-twitter-oguguaanunoby.jpeg',
    link: 'https://www.espn.com/nba/player/_/id/4277905/trae-young'
  },
  {
    name: 'James Harden',
    team: 'Brooklyn Nets',
    image: 'https://cdn.quotesgram.com/img/39/72/1480144376-James-Harden-_31_.jpg',
    link: 'https://www.espn.com/nba/player/_/id/3992/james-harden'
  },
]


const displayProfileList1 = profileList1.map((c, idx) => {
  return (
    <Profiles key={idx} index={idx} name={c.name} team={c.team} image={c.image} link={c.link} />
  );
});

const displayProfileList2 = profileList2.map((c, idx) => {
  return (
    <Profiles key={idx} index={idx} name={c.name} team={c.team} image={c.image} link={c.link} />
  );
});

function App() {
  return (
    <div className="App">
      <section class="hero is-info is-small">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
              NBA Profiles
            </h1>
            <p class="subtitle">
              (Point Guard Edition)
            </p>
          </div>
        </div>
      </section>
      <div class="box cta">
        <p class="has-text-centered">
          <span class="tag is-primary">New</span> Here we have modal cards. When you click on them they will open functional modal examples.
        </p>
      </div>
      <section class="container">
        <div class="columns features">
          {/* ****** ADD Profile Component Here ******* */}
          {displayProfileList1}
        </div>
        <div class="columns features">
          {/* ****** ADD Profile Component Here ******* */}
          {displayProfileList2}
        </div>
      </section>
      <footer>
        <section class="section">
          <div class="container">
            <div class="columns is-multiline">
              <div class="column is-one-third">
                <article class="notification media has-background-white">
                  <figure class="media-left">
                    <span class="icon">
                      <i class="has-text-warning fa fa-columns fa-lg"></i>
                    </span>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <h1 class="title is-size-4">Columns</h1>
                      <p class="is-size-5 subtitle">
                        The power of <strong>Flexbox</strong> in a simple interface
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="column is-one-third">
                <article class="notification has-background-white media">
                  <figure class="media-left">
                    <span class="icon has-text-info">
                      <i class="fa fa-lg fa-wpforms"></i>
                    </span>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <h1 class="title is-size-4">Form</h1>
                      <p class="is-size-5 subtitle">
                        The indispensable <strong>form controls</strong>, designed for maximum clarity
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="column is-one-third">
                <article class="notification has-background-white media">
                  <figure class="media-left">
                    <span class="icon has-text-danger">
                      <i class="fa fa-lg fa-cubes"></i>
                    </span>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <h1 class="title is-size-4">Components</h1>
                      <p class="is-size-5 subtitle">
                        Advanced multi-part components with lots of possibilities
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="column is-one-third">
                <article class="notification has-background-white media">
                  <figure class="media-left">
                    <span class="icon has-text-grey">
                      <i class="fa fa-lg fa-cogs"></i>
                    </span>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <h1 class="title is-size-4">Modifiers</h1>
                      <p class="is-size-5 subtitle">
                        An <strong>easy-to-read</strong> naming system designed for humans
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="column is-one-third">
                <article class="notification has-background-white media">
                  <figure class="media-left">
                    <span class="icon has-text-primary">
                      <i class="fa fa-lg fa-superpowers"></i>
                    </span>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <h1 class="title is-size-4">Layout</h1>
                      <p class="is-size-5 subtitle">
                        Design the <strong>structure</strong> of your webpage with these CSS classes
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="column is-one-third">
                <article class="notification has-background-white media">
                  <figure class="media-left">
                    <span class="icon has-text-danger">
                      <i class="fa fa-lg fa-cube"></i>
                    </span>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <h1 class="title is-size-4">Elements</h1>
                      <p class="is-size-5 subtitle">
                        Essential interface elements that only require a <strong>single CSS class</strong>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <div class="content has-text-centered">
          <div class="control level-item">
            <a href="https://github.com/BulmaTemplates/bulma-templates">
              <div class="tags has-addons">
                <span class="tag is-dark">Bulma Templates</span>
                <span class="tag is-info">MIT license</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
      {/* <!--  ===============
                HERE BE MODALS
    ===============  -->
                <!-- 3dFlipVertical card tiny --> */}
      <div id="modal-card" class="modal modal-fx-3dSlit">
        <div class="modal-background"></div>
        <div class="modal-content is-tiny">
          {/* <!-- content --> */}
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="http://www.radfaces.com/images/avatars/linda-barret.jpg" alt="Hey :)" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Jane Doe</p>
                  <p class="subtitle is-6">@jane_doe</p>
                </div>
              </div>
              <div class="content">
                Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm tellin' you way up north bookin' it can't get theyah from heeyah native bean suppah whawf Powrtland Museum of Aht, back woods hawsun around the pit mummah Yessah, mummah muckle riyht on'ta her
                Bean's dinnahbucket bub geez bud sumpin' fierce ayuhpawt Bangah naw, Powrtland Museum of Aht down cellah sumpin' fierce hoppa bub If you can't stand the wintah you don't deserve the summah slower than molasses going uphill in January.
                Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak Hastur hupadgh li'hee, hai f'nilgh'ri nilgh'ri n'ghftor ngftaghu vulgtlagln h'hrii throd Nyarlathotep lloig, naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog cehye. Zhro y'hah
                nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg nakadishtu chlirgh hupadgh tharanak h'gnaiih.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>

                <time datetime="2018-02-02">12:45 AM - 20 June 2018</time>
              </div>
            </div>
          </div>
          {/* <!-- end content --> */}
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
      {/* <!-- end tiny modal card --> */}
      {/* <!-- 3dFlipVertical card tiny [butterfly] --> */}
      <div id="modal-card2" class="modal modal-fx-3dSlit">
        <div class="modal-background"></div>
        <div class="modal-content is-tiny">
          {/* <!-- content --> */}
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="http://www.radfaces.com/images/avatars/linda-barret.jpg" alt="linda barret avatar" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Jane Doe</p>
                  <p class="subtitle is-6">@jane_doe</p>
                </div>
              </div>
              <div class="content">
                Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm tellin' you way up north bookin' it can't get theyah from heeyah native bean suppah whawf Powrtland Museum of Aht, back woods hawsun around the pit mummah Yessah, mummah muckle riyht on'ta her
                Bean's dinnahbucket bub geez bud sumpin' fierce ayuhpawt Bangah naw, Powrtland Museum of Aht down cellah sumpin' fierce hoppa bub If you can't stand the wintah you don't deserve the summah slower than molasses going uphill in January.
                Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak Hastur hupadgh li'hee, hai f'nilgh'ri nilgh'ri n'ghftor ngftaghu vulgtlagln h'hrii throd Nyarlathotep lloig, naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog cehye. Zhro y'hah
                nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih throd, uln ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg nakadishtu chlirgh hupadgh tharanak h'gnaiih.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <time datetime="2018-02-02">12:45 AM - 20 May 2018</time>
              </div>
            </div>
          </div>
          {/* <!-- end content --> */}
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
      {/* <!-- end tiny modal card --> */}
      {/* <!-- Image modal --> */}
      <div id="modal-image2" class="modal modal-fx-3dSlit">
        <div class="modal-background"></div>
        <div class="modal-content is-huge is-image">
          {/* <!-- content --> */}
          <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="image" />
          {/* <!-- end content --> */}
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
      {/* <!-- Image modal --> */}
      <div id="modal-image4" class="modal modal-fx-3dSlit">
        <div class="modal-background"></div>
        <div class="modal-content is-huge is-image">
          {/* <!-- content --> */}
          <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly" />
          {/* <!-- end content --> */}
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
      {/* <!-- Image modal--> */}
      <div id="modal-image" class="modal modal-fx-superScaled">
        <div class="modal-background"></div>
        <div class="modal-content  is-image">
          {/* <!-- cont/ent --> */}
          <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image" />
          {/* <!--     <img src="https://source.unsplash.com/zFrUz_tNjCY" alt="placeholder">
        -->    <!-- end content --> */}
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
      {/* <script src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js"></script>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/js/OverlayScrollbars.min.js'></script>
                <script src="../js/wild.js"></script>
                <script>
                    document.addEventListener("DOMContentLoaded", function() {
                        //The first argument are the elements to which the plugin shall be initialized
                        //The second argument has to be at least a empty object or a object with your desired options
                        OverlayScrollbars(document.querySelectorAll("body"), {});
        });
                </script> */}
    </div>
  );
}

export default App;
