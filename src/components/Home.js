import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {
	
	render() {
		return (
			<section className="home" id="home">
				<div className="arrow-down"><a href="#about" data-gal="m_PageScroll2id" data-ps2id-offset="65">&#xf107;</a></div>
			
				<div className="tp-banner-container">
					<div className="tp-banner" >				
						<ul>
							{/* THE FIRST SLIDE */}

							<li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-title="DRIVEN BY PASSION">
								<img src="../images/1.jpg" alt=""  data-bgposition="left center" data-kenburns="on" data-duration="14000" data-ease="Linear.easeNone" data-bgfit="100" data-bgfitend="130" data-bgpositionend="right center" />

								{/* THE CAPTIONS IN THIS SLIDE */}

								<div className="caption big-text lft ltt tp-resizeme"  
										data-x="center" 
										data-y="center" 
										data-speed="700" 
										data-start="600" 
										data-easing="easeOutExpo" style={{zIndex: 200}}>
									<div className="big-text">INSPIRED BY PURPOSE</div>	
								</div>
								<div className="caption big-text lft ltt tp-resizeme"  
										data-x="center" 
										data-y="center" 
										data-speed="700" 
										data-start="1000" 
										data-easing="easeOutExpo" style={{zIndex: 200}}>
									<div className="thin-text"><span>DRIVEN BY PASSION</span></div>	
								</div>		

							</li>	

							{/* THE SECOND SLIDE */}

							<li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-title="LOVE WHAT WE DO">
								<img src="images/2.jpg" alt=""  data-bgposition="left center" data-kenburns="on" data-duration="14000" data-ease="Linear.easeNone" data-bgfit="100" data-bgfitend="130" data-bgpositionend="right center" />

								{/* THE CAPTIONS IN THIS SLIDE */}

								<div className="caption big-text lft ltt tp-resizeme"  
										data-x="center" 
										data-y="center" 
										data-speed="700" 
										data-start="600" 
										data-easing="easeOutExpo" style={{zIndex: 200}}>
										<div className="big-text">YOU'VE PROBABLY NOTICED</div>	
								</div>
								<div className="caption big-text lft ltt tp-resizeme"  
										data-x="center" 
										data-y="center" 
										data-speed="700" 
										data-start="1000" 
										data-easing="easeOutExpo" style={{zIndex: 200}}>
									<div className="thin-text"><span>WE LOVE WHAT WE DO</span></div>	
								</div>		

							</li>

							{/* THE THIRD SLIDE */}

							<li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-title="BUILD MOTIVATION">						
								<img src="../images/3.jpg" alt=""  data-bgposition="left center" data-kenburns="on" data-duration="14000" data-ease="Linear.easeNone" data-bgfit="100" data-bgfitend="130" data-bgpositionend="right center" />

								{/* THE CAPTIONS IN THIS SLIDE */}

								<div className="caption big-text lft ltt tp-resizeme"  
										data-x="center" 
										data-y="center" 
										data-speed="700" 
										data-start="600" 
										data-easing="easeOutExpo" style={{zIndex: 200}}>
										<div className="big-text">DIGITAL EXPERIENCES</div>	
								</div>	
								<div className="caption big-text lft ltt tp-resizeme"  
										data-x="center" 
										data-y="center" 
										data-speed="700" 
										data-start="1000" 
										data-easing="easeOutExpo" style={{zIndex: 200}}>
									<div className="thin-text"><span>THAT BUILD MOTIVATION</span></div>	
								</div>	

							</li>						
						</ul>
					</div>
				</div>	
			</section>						
		);		
	}
	
}