import React, { Component } from 'react';
import './Profiles.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="column is-one-third" key={this.props.index}>
                <article class="notification media has-background-white">
                    <figure class="media-left">
                        <span class="icon">
                            <i class="has-text-warning fa fa-columns fa-lg"></i>
                        </span>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            {/* <h1 class="title is-size-4">{this.props.title}</h1> */}
                            <a class="title is-size-4">{this.props.link}</a>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Navigation;
