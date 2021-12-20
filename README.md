# NBA Profiles
This website displays several NBA players and their ESPN profile links. Using React, players are categorized by positions and belong in separate Components.  

## Installation Instructions

## Screenshots
### App
![Screen Shot 2021-12-20 at 10 13 03 AM (2)](https://user-images.githubusercontent.com/92088326/146814148-1606c4cc-7040-4354-b815-47a7bfe17a2c.png)
### Point Guard Component

```js
import React, { Component } from 'react';
import './Profiles.css';

class PointGuards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="column is-4" key={this.props.index}>
                <div class="card is-shady">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={this.props.image} alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content" >
                            <h4>{this.props.name}</h4>
                            <p>{this.props.team}</p>
                            <a href={this.props.link}>
                                <button class="button is-link modal-button">See Full Profile</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PointGuards;
```


### Data

```js
const pointGuards = [
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
    },
    {
        name: 'Trae Young',
        team: 'Atlanta Hawks',
        image: 'https://www.bardown.com/polopoly_fs/1.1531089!/fileimage/httpImage/image.jpeg_gen/derivatives/landscape_620/h-t-twitter-oguguaanunoby.jpeg',
        link: 'https://www.espn.com/nba/player/_/id/4277905/trae-young'
    }
]

const displayPointGuards = pointGuards.map((c, idx) => {
    return (
        <PointGuards key={idx} index={idx} name={c.name} team={c.team} image={c.image} link={c.link} />
    );
});
```


### Test

