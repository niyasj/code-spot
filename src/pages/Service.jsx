import ux from "../img/uxdesign.jpg"
import brand from "../img/branding.jpg"
import commerce from "../img/commerce.png"
import custome from "../img/custome.jpg"

export const Service = () =>{
    return(
        <div class="service container-fluid">
            <div class="text-center" style={{margin:"50px 0 50px 0"}}>
             <h3>Our Mission</h3>
             <h1>Service that's fast, reliable, and affordable</h1>
             </div>

            <div class="row d-flex align-items-center design justify-content-around p-5 mt-4 mb-4">
                  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                     <img style={{width:"100%",height:"70%"}} src={ux} alt="ux/ui"/>
                  </div>
                  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12" >
                        <h1>Visual Design</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                  </div>
               </div>
               <div class="order row  d-flex align-items-center design justify-content-around p-5 mt-4 mb-4">
                  
                  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12" >
                        <h1>E-commerce</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                  </div>
                  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                     <img style={{width:"100%",height:"100%"}} src={commerce} alt="ux/ui"/>
                  </div>
               </div>
               <div class="row d-flex align-items-center design justify-content-around p-5 mt-4 mb-4">
                  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                     <img style={{width:"100%",height:"100%"}} src={custome} alt="ux/ui"/>
                  </div>
                  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12" >
                        <h1> custome web Developement</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                  </div>
               </div>
               <div class=" order row  d-flex align-items-center design justify-content-around p-5 mt-4 mb-4 ">
                
                  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12" >
                        <h1>Branding</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                  </div>

                  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 ">
                     <img style={{width:"100%",height:"100%"}} src={brand} alt="ux/ui"/>
                  </div>
               </div>
                     <div class="text-center">
                        {/* <h3>By Platform</h3> */}
                        <hr class="platform"style={{width:"40%",display:"flex",margin:"auto",border:"2px solid black"}}/>
                     </div>
                        
                     <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 ">
                     {/* <img style={{width:"100%",height:"100%"}} src={brand} alt="ux/ui"/> */}
                  </div>

            
        </div>
    )
}