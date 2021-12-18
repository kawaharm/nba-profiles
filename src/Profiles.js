import React, { Component } from 'react';
import './Profiles.css';

class Profiles extends Component {
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

export default Profiles;