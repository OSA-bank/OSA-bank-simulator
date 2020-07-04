import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from './Slides/Slides';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="homecontainer">
        <Slides />
        <Main />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
