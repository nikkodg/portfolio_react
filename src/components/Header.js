import React,{Component} from 'react'
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Header extends Component {
  render(){
    return(
      <section class="hero is-info has-text-centered">
        <div class="hero-body">
          <div class="container has-text centered">
            <h1 class="title">
              Nikko De Guzman
              </h1>
            <h2 class="subtitle">
              Data Scientist | Developer
              </h2>
              </div>
              </div>

              <div class="hero-foot">
        <nav class="tabs is-fullwidth is-medium">
          <div class="container">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/projects"> Projects </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
        </section>
    )
  }
}
