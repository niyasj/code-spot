import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { useState  } from 'react';
import contact from "../img/contact2.jpg"



export const Contact = () =>{

 

  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_r61ky3i', 'template_zwzv3gr', form.current, 'fMn14ervpfCXt4RUC')
      .then((result) => {
          console.log(result.text);
           e.target.reset()
        }, (error) => {
          console.log(error.text);
          
      });
  };
  
   return(


      <>
      <h3 class="text-center mt-4">let's Talk</h3>
      <div class="contact container-fluid">
      
      <div class="row d-flex justify-content-around ">
        <div class=" col-xxl-6 col-xl-5 col-lg-12 col-md-10 col-sm-10 col-xs-12  contact-content">
        <img style={{width:"100%",height:"80%"}} src={contact} alt="ux/ui"/>
      
        </div>
        <div class="col-xxl-6 col-xl-5 col-lg-6 col-md-8 col-sm-8 col-xs-12 ">
        <form ref={form} onSubmit={sendEmail}>
            <label><h3>Name</h3></label>
            <input type="text" name="name"  required />
        
            <label><h3>Email</h3></label>
            <input type="email"  name="email"  required/>
            
            <lable><h3>Phone</h3></lable>
            <input type="phone" name="phone" required/>
           
            <label><h3>Message</h3></label>
            <textarea name="message" />
            <button type="submit" value="send" >send</button>
        </form>
        </div>
        </div>
      </div>
   </>
      
   )
}