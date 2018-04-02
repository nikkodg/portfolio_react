import React,{Component} from 'react'
import '../App.css'
import Footer from './Footer';

export default class Projects extends Component {
  render(){
    return(
      <section class="section">
      <div align="center" style={{paddingBottom: '25px'}} ><h1 class="title is-1">Projects</h1>
      <div class="container">
      <div class="tile is-ancestor" style= {{marginLeft: 'auto', marginRight: 'auto'}} >
        <div class="tile is-6  is-parent " align= "center">
          <article class="tile is-child box is-vertical">
      <p class="title">LoL Rank Predictor</p>
      <p>A machine learning project that uses basic regression and classification techniques to predict the elo
      of a League of Legends player using season 3 seeded data provided by Riot Games.</p>
    </article>
    </div>

    <div class="tile is-6  is-parent " align= "center">
    <article class="tile is-child box" align= "center">
      <p class="title">Photo Archive Mobile Application</p>
      <p>Designed and developed a Photo Archive Mobile Application for the City of Los Angeles’
      Bureau of Engineering as part of the Professional Practice Program
      at Cal State LA. Developed in a team of six members.
      Project used Microsoft Azure for backend.</p>
    </article>
    </div>

  </div>
</div>
</div>

<div></div>

<div>
<Footer/>
</div>
</section>
    )
  }
}
