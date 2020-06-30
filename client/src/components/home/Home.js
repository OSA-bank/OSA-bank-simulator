import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Slides from './Slides'
import Footer from './Footer';
import Main from './Main';

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