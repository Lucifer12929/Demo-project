import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import "./Home.css";
import { useRef } from 'react';
import headerImg from './header.png';
import { k } from "react-scroll";
import { Helmet } from "react-helmet";
import img1 from './cars/img1.png'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Home() {
    const menuref = useRef(null);
  return (
    <div className='home'>
        <Helmet>
        <title>Car Nation</title>
      </Helmet>
      <Navbar/>
      <section id="header" className="d-flex align-items-center">
			<div className="container-fluid">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
								<h1>
									Get your own Car with
                  <strong className="brand-name"> Car Nation</strong>{' '}
								</h1>
								<h2 className="my-3">We are the brand of top supercars in the world</h2>
								<div className="mt-3">
                <button className="btn-get-started" >
                  <k to="Menu1" spy={true} offset={50} smooth={true} duration={500}>
              Let's Go
              </k>
            </button>
									
								</div>
							</div>

							<div className="col-md-6 order-1 order-lg-2 header-img">
								<img src={headerImg} alt="headerImg" className="img-fluid animated" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section className="Menu1" id="Menu1" ref={menuref} >
        <h2 className="brand-name text-dark text-center mt-5">FEATURED CAR</h2>
            <div className= "car_card" >
            <div className="car_box">
               
                <img src={img1} className="card-img-top w-100 rounded-3 mx-auto" alt="..."/>
                <div className="card-body">
                   
                    <h1 className="card-title"><span className="card-value">Ferrai</span></h1>   
                  
                    <h6 className="card-title">Price:<span className="card-value">20$</span></h6> 
                    <p className="card-title fw-bold">Description:<span className="fw-normal" >High Speed Car</span></p>   
                
                </div>
                
            </div>
            <div className="car_box">
               
                <img src={img1} className="card-img-top w-100 rounded-3 mx-auto" alt="..."/>
                <div className="card-body">
                   
                    <h1 className="card-title"><span className="card-value">Ferrai</span></h1>   
                  
                    <h6 className="card-title">Price:<span className="card-value">20$</span></h6> 
                    <p className="card-title fw-bold">Description:<span className="fw-normal" >High Speed Car</span></p>   
                
                </div>
                
            </div>
            <div className="car_box">
               
               <img src={img1} className="card-img-top w-100 rounded-3 mx-auto" alt="..."/>
               <div className="card-body">
                  
                   <h1 className="card-title"><span className="card-value">Ferrai</span></h1>   
                 
                   <h6 className="card-title">Price:<span className="card-value">20$</span></h6> 
                   <p className="card-title fw-bold">Description:<span className="fw-normal" >High Speed Car</span></p>   
               
               </div>
               
           </div>
           <div className="car_box">
               
               <img src={img1} className="card-img-top w-100 rounded-3 mx-auto" alt="..."/>
               <div className="card-body">
                  
                   <h1 className="card-title"><span className="card-value">Ferrai</span></h1>   
                 
                   <h6 className="card-title">Price:<span className="card-value">20$</span></h6> 
                   <p className="card-title fw-bold">Description:<span className="fw-normal" >High Speed Car</span></p>   
               
               </div>
         
           </div>
           
            </div>
        
        <div className="about_us">
                        <div className="about1 mx-auto">
                        <div className="about2 col col-12 col-lg-7 order-sm-2"> 
                                <h3 className="brand-name text-dark ">About Us</h3>
                                <hr />
                                Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi. Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. 
                                </div>
                                <div className="about3"> 
                                <img className="about_img " src="https://www.bing.com/th/id/OGC.92e7791bad56b6e55baa93733e07ef07?pid=1.7&rurl=https%3a%2f%2fgiffiles.alphacoders.com%2f993%2f99378.gif&ehk=4oQL2r5ABv%2fx35aTmxV778w5tXaP6iBSFh5740CR6F4%3d" alt="" />
                                </div>
                            
                        </div>
                </div>

               
                <Link to="/contact" className="linkinbtn">
                <div className="contact_us">
                <h1>Contact Us</h1>
                </div>
              </Link>
              
                </section>
    </div>

  )
}

export default Home