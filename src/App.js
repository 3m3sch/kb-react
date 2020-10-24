import React from 'react';
import logo from './logo.svg';

import './css/my/main.css';
import './css/my/menu.css';
import './css/my/home.css';

import './css/base.css';
import './css/skeleton.css';
import './css/font-awesome.css';
import './css/animate.css';
import './css/layout.css';
import './css/owl.carousel.css';
import './css/retina.css';
import './css/settings.css';
import './css/colors/color-gold.css';

//import fonts

import Menu from './components/Menu';
import Home from './components/Home';

export default class App extends React.Component {
  
  imagesPreload() {
	  
  }
  
  render() {
	  return (
    	<div className="App">
      		<Menu />
	  		<Home />
    	</div>
  	  );
  }
  
}