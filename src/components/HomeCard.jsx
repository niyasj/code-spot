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
               
               <div class="col col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 ">
               <img class="cardimg" src={company} alt="company" />
                <h3>Large Companies</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                  dummy text ever since the 1500s</p>
               </div>
              <div class="col col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12">
               <img class="cardimg" src={Startups} alt="company" />
                <h3>Startups</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                  dummy text ever since the 1500s</p>
               </div>
               <div class="col col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12">
               <img class="cardimg" src={local} alt="company" />
                <h3>Local Business</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                  dummy text ever since the 1500s</p>
               </div>
               <div class="col col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12">
               <img class="cardimg" src={Blog} alt="company" />
                <h3>Blog</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                  dummy text ever since the 1500s</p>
               </div> 
           </div>
        </div>
        </>
    )
}
