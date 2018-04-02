import React,{Component} from 'react'
import '../App.css'
import Footer from './Footer';
import cpp_java_python from '../images/cpp_java_python.png'
import mlstack from '../images/ml-stack.png'
import reactnode from '../images/react-node.png'
import ndg from '../images/ndg2.jpg'
import cloud from '../images/cloud.png'
import os from '../images/os.png'

export default class About extends Component {
  render(){
    return(
      <section class="section" >
      <div class="container">

        <div align="center"><h1 class="title is-1">About Me</h1></div>

        <section class="section" >
        <div class="container">
        <div className="box">
        <article class="media">
        <div class="media-left">
      <figure class="image is-128x128 ">
        <img src={ndg} alt="Nikko De Guzman" style={{borderRadius:'50%'}}></img>
      </figure>
    </div>
        <div class="content">
        <strong>Nikko De Guzman</strong>
        <br></br>
        <p>I am currently a senior
        at California State University Los Angeles studying Computer Science.
        I am an aspiring Data Scientist who also has interests in DevOps
        and Project Management. I am constantly adding more skills to my machine learning
        stack.
        </p>
        </div>
        </article>
        </div>
        </div>
        </section>


        <section class="section">
        <div align="center"><h1 class="title is-1">Skills</h1>
        <div class="container">
        <div class="tile is-ancestor" style= {{marginLeft: 'auto', marginRight: 'auto'}} >
          <div class="tile is-4  is-parent " align= "center">
            <article class="tile is-child box is-vertical">
        <p class="title">Big Languages</p>
        <p></p>
        <figure class="image is-128x128">
          <img src={cpp_java_python} alt="CPP Java Python"></img>
        </figure>
      </article>
      </div>

      <div class="tile is-4  is-parent " align= "center">
      <article class="tile is-child box" align= "center">
        <p class="title">Machine Learning</p>
        <p></p>
        <figure class="image is-240x240">
          <img src={mlstack} alt="ML Stack"></img>
        </figure>
      </article>
      </div>

      <div class="tile is-4  is-parent " align= "center">
      <article class="tile is-child box" align= "center">
        <p class="title">Web Technologies</p>
        <p></p>
        <figure class="image is-240x240">
          <img src={reactnode} alt="Web Technologies"></img>
        </figure>
      </article>
      </div>

    </div>
  </div>
  </div>
  </section>

  <section class="section">
  <div class="container">
  <div class="tile is-ancestor" style= {{marginLeft: 'auto', marginRight: 'auto'}} >
    <div class="tile is-6  is-parent " align= "center">
      <article class="tile is-child box is-vertical">
  <p class="title">Cloud</p>
  <p></p>
  <figure class="image is-240x240">
    <img src={cloud} alt="Cloud"></img>
  </figure>
</article>
</div>

<div class="tile is-6  is-parent " align= "center">
<article class="tile is-child box" align= "center">
  <p class="title">Operating Systems</p>
  <p></p>
  <figure class="image is-240x240">
    <img src={os} alt="Operating Systems"></img>
  </figure>
</article>
</div>

</div>
</div>

</section>


</div>




<div>
<Footer/>
</div>
      </section>
    )
  }
}
