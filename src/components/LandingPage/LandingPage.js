import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/navbar';
import './LandingPage.css'

function LandingPage() {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">The Book Company</h1>
        <p className="home-description">
        At Book Company, we are passionate about connecting readers with captivating stories and inspiring poetry.
        With a diverse collection of books and a platform for aspiring poets to share their creations,
        we strive to foster a community of literary enthusiasts and nurture creativity.
        </p>
        <div className='row'>
            <Link to="/marketplace">
                <button type='button' className='home-button'>Book Marketplace</button>
        </Link>
            <Link to="/submit-poem">
                <button type='button' className='home-button'>Poem Submission</button>
        </Link>
        </div>
       
      </div>
      <img
        src="https://images.inc.com/uploaded_files/image/1920x1080/getty_501794256_2000149020009280253_334740.jpg"
        alt="books"
        className="home-desktop-img"
      />
    </div>
    </>
  );
}

export default LandingPage;
