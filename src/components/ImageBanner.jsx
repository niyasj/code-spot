
import { Button } from "react-bootstrap";
import  Rocket  from "../img/rocket3.png"


function ImageBanner(){
    return(
        
        
        
        <div class="container-fluid image-banner">
        <div class="row  cotainer content-big align-items-center justify-content-around">
        <div class="  col-lg-4 col-sm-12 content ">
             <h1 class="heading">Boost Your Business</h1>
             <p  class="tagline">Lorem IpsumFis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
             <Button type="submit">Learn More</Button>
        </div>
        <div class=" col-lg-4 col-sm-12  ">
             <img style={{width:"90%",height:"70%",marginTop:"30px",text:"center"}} src={Rocket} alt="rocket"></img>
        </div>
        </div>

        </div>

    
        
        
      
            );
    }
          
export default ImageBanner;
          
          
      
          
    
