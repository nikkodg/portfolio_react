import React,{Component} from 'react'
import '../App.css'
import reactlogo from '../images/reactlogo.png'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Footer extends Component {
  render(){
    return(
      <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Nikko De Guzman</strong>, All Rights Reserved. 2018.
      </p>

      <a href="https://bulma.io">
  <img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="128" height="24">
  </img>
</a>
  <br></br>
  <a href="https://reactjs.org/">
<img src={reactlogo} alt="Made with React" width="128" height="24">
</img></a>
    </div>
  </div>
</footer>
    )
  }
}
