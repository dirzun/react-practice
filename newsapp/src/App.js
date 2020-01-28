import React, { Component } from 'react';

import './App.scss';
import Header from "./components/Header/Header.js";
import ToggleBtn from "./components/Header/BurgherMenu/ToggleBtn.js"
import Backdrop from "./components/Header/BurgherMenu/Backdrop.js"
import Main from './components/MainContent/Main.js';
import Footer from "./components/Footer/Footer"




class App extends Component {

state = {
    sideToggleOpen :false
  };

toggleClickHandler = ()=>{
this.setState((prevState)=>{
  return {sideToggleOpen:!prevState.sideToggleOpen};
});
};


backdropClickHandler= () =>{
  this.setState({sideToggleOpen:false});
};






  render(){
    let backdrop;
    if (this.state.sideToggleOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  return (
    <div style={{height:'100%'}}> 
  
    <Header  toggleClickHandler={this.toggleClickHandler} />

    <ToggleBtn show = {this.state.sideToggleOpen}/>
    {backdrop}
    <main>
      <Main />

    </main>
    <Footer />
    </div>
  );
}
}
export default App;
// api key :d308713e8e22447eab9a94dfae13da6a