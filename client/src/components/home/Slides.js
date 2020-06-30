import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import osa from './osa.jpg';
import business from './business.jpg'
import house from './house.jpg'

const myStyle = {
		  
}
function Slides() {
	return (
		<Carousel >
		<Carousel.Item >
		  <img
			className="d-block w-100"
			src={osa}
			alt="Car Loan" style={myStyle}
		  />
		  
		</Carousel.Item>
		<Carousel.Item>
		  <img
			className="d-block w-100"
			src={house}
			alt="House Loan"style={myStyle}
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