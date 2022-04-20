import React, { useEffect, useState } from "react";
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Content";
import axios from "axios";
import { faBell, faCirclePlay, faCirclePlus, faHeart, faPlus, faSearch, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dashboard = () => {
  const [doctor,setDoctor]=useState('')
   
  useEffect(()=>{
    axios.get(`https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails`)
    .then((res)=>{
      console.log(res.data[0]);
      setDoctor(res.data[0])
    })
},[])
  return (
    <>
 <header>
        <nav
          id="sidebarMenu" 
          class="collapse d-lg-block sidebar collapse bg-white"
        >
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4 pt-3">
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 mt-2 ripple"
                aria-current="true"
              >
                <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Overview</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple "
              >
                <i class="fas fa-chart-area fa-fw me-3"></i>
                <span>Calander</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple active"
              >
                <i class="fas fa-lock fa-fw me-3"></i>
                <span>Patient List </span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-line fa-fw me-3"></i>
                <span>Messages</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-pie fa-fw me-3"></i>
                <span>Payment Information</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-chart-bar fa-fw me-3"></i>
                <span>Setting</span>
              </a>

              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
                style={{marginTop:'95%'}}
              >
                <i class="fas fa-chart-bar fa-fw me-3"></i>
                <span>Help</span>
              </a>
              
              <div style={{display:'flex',justifyContent:"space-around",padding:'10px'}}>
                <img style={{width:'3rem',height:'3rem',borderRadius:'1rem'}} src="https://cdn.sanity.io/images/0vv8moc6/hcplive/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg" />
                <div>
                <h6 >{doctor.name}</h6>
                <span style={{lineHeight:'-1px'}}>{doctor.specification}</span>
                </div>
                
              </div>
             

            </div>
          </div>
        </nav>

        <nav
          id="main-navbar"
          class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
             
            <a class="navbar-brand" href="#" style={{display:'flex'}}>
              <img style={{width:'2.5rem',marginRight:'1rem'}} src="https://image.shutterstock.com/image-vector/tooth-logo-vector-illustration-260nw-386945401.jpg" />
              <h3>Zendenta</h3>
            </a>

            <form class="d-none d-md-flex input-group w-auto my-auto">
              <input
                autocomplete="off"
                type="search"
                class="form-control rounded"
                placeholder='Search'
                style={{minWidth: '225px'}}
              />
              <span class="input-group-text border-0" style={{marginRight:'1rem'}}>
              <FontAwesomeIcon   icon={faSearch} />
              </span>
              <div style={{display:'flex'}}>
              <FontAwesomeIcon style={{fontSize:'2rem',color:'blue'}} icon={faCirclePlus} />
              <FontAwesomeIcon style={{fontSize:'2rem',paddingLeft:'1.5rem'}} icon={faBell} />
              </div>
             
            </form>

            
          </div>
        </nav>
      </header>
      <main>
          <hr />
          
        <div class="container pt-4">
          <Content />
        </div>
      </main> 
    </>
  );
};
export default Dashboard;
