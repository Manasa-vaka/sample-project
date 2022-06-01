/*import React from 'react'
//import { Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container-fluid">
    <a className="navbar-brand" href="/">Events</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Registration" >Registration</a>
        </li>

        <li class="nav-item">
                    <a class="nav-link" href="/Registration">Registration<span class="sr-only">(current)</span></a>
                  </li>





        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href=" /Academics">Academics</a>
        </li>

        <li callName="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm" target="_blank">Payments</a></li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"aria-current="page" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admissions
          </a>
          

          <ul className="dropdown-menu" aria-labelledby="dropdown"> 
            <li><a className="dropdown-item" href="/">B.Tech</a></li>
            <li><a className="dropdown-item" href="/">M.tech</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something other courses</a></li>
          </ul>
        </li>
            

       

        <li className="nav-item">
          <a className="nav-link active"aria-current="page" href="/Placements">Placements </a>
        </li>
      </ul>
      <form className="d-flex">

       <h5><li class="nav-item mb-2"><a href="https://www.google.com/" class="nav-link p-0 text-muted">Search</a></li></h5>
   



       <div class="col-md-6 col-xs-12">
                    <div id="intro-video-clip-section">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5QS-Kqn1Vq0?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
        </div>
      </form>



    </div>
  </div>
</nav>
    </div>
  )
}*/



import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
    <section class="navbar-dark bg-dark header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
              
              <a class="navbar-brand text-white" href="#">Shopping</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                <li class="nav-item ">
                    <a class="nav-link " href="#Home">Home<span class="sr-only"></span></a>
                  </li>


                  <li class="nav-item ">
                    <a class="nav-link " href="#Order Form">Order Form<span class="sr-only"></span></a>
                  </li>
                 
                  
                                    
       
                  <li class="nav-item">
                    <a class="nav-link " href="#Gallery">Gallery<span class="sr-only"></span></a>
                  </li>
                  



                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle"aria-current="page" href="#products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        All Services / All Products
                     </a>
          

                      <ul className="dropdown-menu" aria-labelledby="dropdown"> 
                        <li><a className="dropdown-item" href="/">Domain Booking</a></li>
                        <li><a className="dropdown-item" href="/">Hosting Space</a></li>
                        <li><a className="dropdown-item" href="/">Cloud S pace</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/">Something other courses</a></li>
                      </ul>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link " href="#Contact Us">Contact Us<span class="sr-only"></span></a>
                  </li>
                  
         
                <form className="d-flex">

                  <h5><li class="nav-item mb-2"><a href="https://www.google.com/" class="nav-link p-0 text-muted">Search</a></li></h5>

                
                 </form>



                </ul>
                
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}
export default Navbar;

