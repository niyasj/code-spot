import React from 'react';
import { FaFacebook,FaTwitter,FaGoogle,FaInstagram,FaLinkedin,FaGithub,FaEnvelope,FaSearchLocation,FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
  return (

<footer class="text-center text-lg-start bg-light text-muted">
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
 
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="/#" class="me-4 text-reset">
        <FaFacebook />
      </a>
      <a href="/#" class="me-4 text-reset">
        <FaTwitter />
      </a>
      <a href="/#" class="me-4 text-reset">
        <FaGoogle />
      </a>
      <a href="/#" class="me-4 text-reset">
        <FaInstagram />
      </a>
      <a href="/#" class="me-4 text-reset">
       <FaLinkedin/>
      </a>
      <a href="/#" class="me-4 text-reset">
        <FaGithub/>
      </a>
    </div>
    
  </section>
 

  
  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            DigiSpot
          </h6>
          <p>
              Boost your business with us,codespot enable to bring your business online and
              make your business more profitable
          </p>
        </div>
      
        <div class="products col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
          
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="/#!" class="text-reset" >React</a>
          </p>
          <p>
            <a href="/#!" class="text-reset">landing pages</a>
          </p>
          <p>
            <a href="/#!" class="text-reset">wordpress</a>
          </p>
          <p>
            <a href="/#!" class="text-reset">SEO</a>
          </p>
        </div>
        

    
        <div class="services   col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <p>
            <a href="/#!" class="text-reset">React websites</a>
          </p>
          <p>
            <a href="/#!" class="text-reset">wordpress</a>
          </p>
          <p>
            <a href="/#!" class="text-reset">Shopify</a>
          </p>
          <p>
            <a href="/#!" class="text-reset">SEO</a>
          </p>
        </div>
      

       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><FaSearchLocation/> karur,639117</p>
          <p><FaEnvelope/> DigiSpot@gmail.com</p>
          <p> <FaPhoneAlt/> +918248890425</p>
      
        </div>
      
      </div>
      
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2023 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/" style={{textDecoration:"none"}}>DigiSpot</a>
  </div>
 
</footer>

  );
};

export default Footer;
