import ImageBanner from "../components/ImageBanner"
// import { Button } from "react-bootstrap";

import {HomeCard}  from "../components/HomeCard"

export const Home = () =>{
    return(
        <>
          <ImageBanner />
          <section class="blogs text-center ">
          <div class="row justify-content-center">
          <div class="col col-7">
              <h1 class="mb-5">What we Do?</h1>
             {/* <hr style={{width:"60%",marginLeft:"18%"}}/> */}
              <p >At <span style={{fontWeight:"bold"}}>CodeSpot</span>, we are passionate about helping businesses reach 
                 their full potential through technology. Whether 
                 you need a custom software solution, a mobile app, or a web-based platform, we have the expertise and experience to 
                deliver exactly what you need. Contact us today to learn more about how we can help your business thrive</p>
              <br/>
              {/* <Button href="/Blog" class="button">Learn More</Button> */}
              </div>
              </div>
          </section>
           <HomeCard/>

      
        </>
          
          
                 
              )
          }