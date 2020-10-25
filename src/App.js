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

//import $ from 'jquery';
//import { Royal_Preloader } from './js/royal_preloader.min';


export default class App extends React.Component {
	
  imagesPreload() {
	  var images = {
		'eBgImage1' : './e_images/alaska-landscapes-PPA8WMJ.jpg',
		'eBgImage2' : './e_images/haleakala-PCXF7NY.jpg',
	  	'eBgImage3' : './e_images/mountains-lake-PQDUX85.jpg',
	  	'eBgImage4' : './e_images/peten-lake-PJ486ER.jpg',
	  	'eBgImage5' : './e_images/scenic-sunset-over-li-river-in-xingping-china-692XKY3.jpg' 
	  };
	  
	  /*
	  Royal_Preloader.config({
    	mode:           'logo', // 'number', "text" or "logo"
        timeout:        0,
        logo:           'images/preload-logo.png',
		opacity:        1,
        background:     ['#FFFFFF'],
		images: images
	  });
	  */
	  
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