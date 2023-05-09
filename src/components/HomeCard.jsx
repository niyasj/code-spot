import  company  from "../img/company.jpg"
import  Startups  from "../img/startups.jpg"
import  local from "../img/localbusiness.jpg"
import Blog from "../img/Blog.jpg"



export const HomeCard = (props) =>{
    return(
        <>
        <div class="Homecard container-fluid">
        <h1 class="text-center mb-5">we give Digital solutions for </h1>
           <div class="row text-center">
               
               <div class="col col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
               <img class="cardimg" src={company} alt="company" />
                <h3>Large Companies</h3>
                <p>we build complex Website for large companies with an outstanding Quality </p>
               </div>
              <div class="col col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
               <img class="cardimg" src={Startups} alt="company" />
                <h3>Startups</h3>
                <p>Startup companies need a website to promote their product's in Internet , digiSpot have a  best solution for promoting products and Manage their websites</p>
               </div>
               <div class="col col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
               <img class="cardimg" src={local} alt="company" />
                <h3>Local Business</h3>
                <p>Local business which is also called Small scale shop needs to develop  their business into a Digital way. For this we provide a website and we add SEO(search Engine OPtimization) for their Business
                </p>
               </div>
               <div class="col col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
               <img class="cardimg" src={Blog} alt="company" />
                <h3>Blog</h3>
                <p>Blog websites can make you to promote your fun content or techie related content, it gives you some amount pocket money in standard</p>
               </div> 
           </div>
        </div>
        </>
    )
}