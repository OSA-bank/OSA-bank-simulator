import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from './Slides/Slides'
import Footer from './Footer/Footer';
import Main from './Main/Main';


function Home() {
	return (
		<div>
			<Slides />
			<Main />

			<Footer/>
		</div>
		
	);
  }


 export default Home;