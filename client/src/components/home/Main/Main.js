import React from 'react';
import icon from '../images/icon.png';
import bank from '../images/bankicon.png';
import phone from '../images/phone.png';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion'
//import { ParallaxProvider, Parallax } from 'react-skrollr';


function Main() {
	return (
		<div className="divServices">
			<section className="services">
			<motion.h2 animate={{opacity:1,left:0}} className="heading"  data-center-center="opacity:1;left:0;"
			data-0-bottom="opacity:0;left:500px;">Our Services</motion.h2>
			<p className="text" data-center-center="opacity:1;right:0;" data-0-bottom="opacity:1;right:500px;">
				We provide with a quick, easy and user friendly credit simutaor. With our project you can predit if you are eligible for the loan of your dream or not.
			</p>
			<div className="container">
				<div className="serviceBx" data-center-center="opacity:1;left:0;" data-0-bottom="opacity:0;left:-400px;">
					<div>
						<img alt="" src={icon}/>
						<h2>Credibility</h2>
					</div>
				</div>
				<div className="serviceBx" data-center-center="opacity:1;bottom:0;" data-0-bottom="opacity:0;bottom:-400px;">
					<div>
						<img alt="" src={bank}/>
						<h2>Banking</h2>
					</div>
				</div>
				<div className="serviceBx" data-center-center="opacity:1;right:0;" data-0-bottom="opacity:0;right:-400px;">
					<div>
						<img alt="" src={phone}/>
						<h2>Facility</h2>
					</div>
				</div>
			</div>
		</section>
		</div>
	);
}

export default Main;