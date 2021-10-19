import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUS.css'
const AboutUs = () => {
    return (
        <div>
            <div className="container about">
                <h1 className="about-des text-4xl text-gray-300 font-bold ml-40 pt-48">About Us</h1>
                
                <div className="about-des mt-12">
                        <h1><Link className="text-2xl text-gray-300 font-bold ml-40 pt-48"  to="/home">Home</Link></h1>
                        <h1><Link className=" text-2xl text-gray-300 font-bold ml-40 pt-48" to="/services">Services</Link></h1>
                </div>
            </div>
            

            <div className="mid-section my-16">
                <h2 className="font-bold text-red-600 text-3xl">About Us</h2>
                <h1 className="font-bold text-4xl mt-4">We assured to you that we will provide responsible treatment to you. It’s our duty for any <span className="text-red-600">patients</span>. You are welcome to HounLare medical & caregiver services center.</h1>
            </div>


            <div className="final-section ">
            <h2 className="font-bold text-red-600 text-3xl mb-10">Helpful Doctors</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://i.ibb.co/4RB3NKW/team-03.jpg
" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Dr. Rass Venors</h5>
        <p className="card-text">MBBS of pathology, USA</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://i.ibb.co/55p91x4/team-02.jpg
" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Sandra Elias</h5>
        <p className="card-text">MBBS of pathology, USA</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="      https://i.ibb.co/rH19Fwj/team-01.jpg
" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Dr William</h5>
        <p className="card-text">MBBS of pathology, USA</p>
      </div>
    </div>
  </div>
</div>  
             </div>


        </div>
    );
};

export default AboutUs;