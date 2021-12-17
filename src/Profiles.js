import React, { Component } from 'react';
import './Profiles.css';

class Profiles extends Component {
    render() {
        return (
            <div className="Profiles">
                {/* <!-- START NAV --> */}
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="#">
                                <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" alt="Logo" />
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item is-active">
                                    Home
                                </a>
                                <a class="navbar-item">
                                    Examples
                                </a>
                                <a class="navbar-item">
                                    Features
                                </a>
                                <a class="navbar-item">
                                    Team
                                </a>
                                <a class="navbar-item">
                                    Archives
                                </a>
                                <a class="navbar-item">
                                    Help
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <!-- END NAV --> */}

                <div class="container">
                    <div class="section">
                        <div class="columns">
                            <div class="column has-text-centered">
                                <h1 class="title" style="color: ghostwhite;">Bulma Card Layout Template</h1><br>
                            </div>
                        </div>
                        <div id="app" class="row columns is-multiline">
                            <div v-for="card in cardData" key="card.id" class="column is-4">
                                <div class="card large">
                                    <div class="card-image">
                                        <figure class="image is-16by9">
                                            <img src="card.image" alt="Image" />
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img src="card.avatar" alt="Image" />
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-4 no-padding"> PUT TITLE HERE </p>
                                                <p>
                                                    <span class="title is-6">
                                                        <a href=""> PUT SOMETHING HERE </a> </span> </p>
                                                <p class="subtitle is-6"> PUT SOMETHING HERE 2</p>
                                            </div>
                                        </div>
                                        <div class="content">
                                            PUT SOMETHING HERE 3
                                            <div class="background-icon"><span class="icon-twitter"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profiles;