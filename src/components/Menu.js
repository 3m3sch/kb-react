import React from 'react';
import ReactDOM from 'react-dom';

export default class Menu extends React.Component {
	
	render() {
		return (
			<nav id="menu-wrap" className="menu-back cbp-af-header">
				<div className="container">
					<div className="sixteen columns">
						<div className="logo"></div>
						<ul className="slimmenu">
							<li> 
								<a href="#home" data-ps2id-offset="100">Strona główna</a>
							</li>
							<li>
								<a href="#about">O mnie</a>
							</li>
							<li>
								<a href="#work">Oferta</a>
							</li>
							<li> 
								<a href="#services">Cennik</a>
							</li>
							<li> 
								<a href="#faq">FAQ</a>
							</li>
							<li>
								<a href="#contact">Kontakt</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>		
		);		
	}
	
}