import React from "react"
import "../App.css"
import {Link,Route,Routes}  from "react-router-dom"
import {Home} from "../pages/Home"
import {Service} from "../pages/Service"
import {Blog} from "../pages/Blog"
import {Contact} from "../pages/Contact"


function Navbar(){
   return (
    <>
    <nav class="navbar navbar-expand-lg " id="sticky-nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#">code<span class="link-success">S</span>pot</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" mx-auto justify-content-end  navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link active" to="/Service" >Service</Link>
       </li>
         <li class="nav-item ">
          <Link class="nav-link active" to="/Blog" >Blog</Link>
       </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Contact">Contact Us</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
   
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Service" element={<Service />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />

    </Routes>
    </>
   )
}

export default Navbar;