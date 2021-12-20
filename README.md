# NBA Profiles
This website displays several NBA players and their ESPN profile links. Using React, players are categorized by positions and belong in separate Components.  

## Installation Instructions

## Screenshots
### App
![Screen Shot 2021-12-20 at 10 13 03 AM (2)](https://user-images.githubusercontent.com/92088326/146814148-1606c4cc-7040-4354-b815-47a7bfe17a2c.png)
### Component

```html
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

### Test

