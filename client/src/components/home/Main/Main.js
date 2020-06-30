import React from 'react';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
	return (
		<section className="services">
			<h2 className="heading" data-center-center="opacity:1;left:0;" data-0-bottom="opacity:0;left:500px;">Our Services</h2>
			<p className="text" data-center-center="opacity:1;right:0;" data-0-bottom="opacity:1;right:500px;">
				What we,
			</p>
			<div className="container">
				<div className="serviceBx" data-center-center="opacity:1;left:0;" data-0-bottom="opacity:0;left:-400px;">
					<div>
						<img src={icon1}/>
						<h2>Design</h2>
					</div>
				</div>
				<div className="serviceBx" data-center-center="opacity:1;bottom:0;" data-0-bottom="opacity:0;bottom:-400px;">
					<div>
						<img src={icon2}/>
						<h2>Development</h2>
					</div>
				</div>
				<div className="serviceBx" data-center-center="opacity:1;right:0;" data-0-bottom="opacity:0;right:-400px;">
					<div>
						<img src={icon3}/>
						<h2>Branding</h2>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Main;