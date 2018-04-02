import React,{Component} from 'react'
import Footer from './Footer';
import '../App.css'

export default class Contact extends Component {
  render(){
    return(
      <section class="section">
      <div className="containter" >
      <div style= {{paddingTop: '30px'}}>


  <div class="content" align="center" style= {{height: '100px', verticalAlign: 'middle', lineHeight: '100px'}}>
    <span class="icon is-large">
    <div align="center" >
    <a style={{display: "table-cell"}} target="_blank" href="https://www.linkedin.com/in/nikkodeguzman/"><i class="fab fa-linkedin fa-8x"></i></a>
    </div>
    </span>
  </div>
  <div class="content" align="center" style= {{paddingTop: '10px', height: '100px', verticalAlign: 'middle', lineHeight: '100px'}}>
    <span class="icon is-large">
    <div align="center" >
    <a style={{display: "table-cell"}} target="_blank" href="https://nikkodg.github.io/"><i class="fab fa-github fa-8x"></i></a>
    </div>
    </span>
  </div>
  <div class="content" align="center" style= {{height: '100px', verticalAlign: 'middle', lineHeight: '100px'}}>
    <p class="is-size-3-fullhd"><b>Email:</b> nikkdg@gmail.com  <b>    Phone:</b> 213-507-5346</p>
  </div>


</div>
      </div>
      <Footer/>
      </section>
    )
  }
}
