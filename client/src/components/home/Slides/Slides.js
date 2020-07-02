import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import osa from '../images/osa.jpg';
import business from '../images/business.jpg'
import house from '../images/house.jpg'

const myStyle = {
		  
		  
}
function Slides() {
	return (
		<Carousel id="myCarousel"  >
		<Carousel.Item >
		  <img
			className="d-block w-100" style={myStyle}
			src={osa}
			alt="Car Loan"
		  />
		  
		</Carousel.Item>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src={house}
			alt="House Loan" style={myStyle}
		  />
		</Carousel.Item>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src={business}
			alt="Business Loan" style={myStyle}
		  />
		</Carousel.Item>
	  </Carousel>
	);
  }


 export default Slides;