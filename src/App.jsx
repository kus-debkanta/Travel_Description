import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Map from './Component/Map/Map';
import Footer from './Component/Footer/Footer';
import Slider from './Component/Slider/Slider';
import Bottom from './Component/Bottom/Bottom';
import Middle from './Component/Middle/Middle';
import Hidden from './Component/Hidden/Hidden';


class App extends Component {
  constructor(){
    super();
    this.state={
      showing: true
    }
  }
  showingHandler=()=>{
      this.setState({
        showing: !this.state.showing
      })
  }
  render() {
    return (
      <div>
        <Navbar showValue={this.state.showing} show={this.showingHandler}></Navbar>
        
        <Slider></Slider>
        <Map></Map>
        <Middle></Middle>
        <Bottom></Bottom>
        <Footer></Footer>
      </div>
    )
  }
}
export default  App;