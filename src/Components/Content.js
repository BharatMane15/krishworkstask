import { faAngleUp, faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Content = () => {

   const [data,setData]=useState('')
   const [appoinment,setAppoinment]=useState('')
   useEffect(()=>{
          axios.get(`https://619f39821ac52a0017ba467e.mockapi.io/patientDetails`)
          .then((res)=>{
            console.log(res.data[0])
            setData(res.data[0])
          })
          
          Appoinment();
   },[])

     

     const Appoinment =() =>{
            axios.get(`https://619f39821ac52a0017ba467e.mockapi.io/appointment_details`)
            .then((res)=>{
              console.log(res.data[0]["Upcoming Appointments"],"Appoinment")
              setAppoinment(res.data[0]["Upcoming Appointments"],"Appoinment")
            })
     }

  return (
    <>
      <div className="container ">
        
        <div style={{ backgroundColor: "#F2F5F9" }}>
      
          <div style={{ display: "flex", justifyContent: "space-between",paddingTop:'2rem'}}>
            <h6 style={{ padding: "1rem", color: "blue"}}>
              Patient List  <FontAwesomeIcon icon={faChevronRight} />    <FontAwesomeIcon style={{color:'gray',marginLeft:'1rem'}} icon={faUser} /> <span style={{ color: "gray" }}> { data.name}</span>
            </h6>
            <button
              style={{
                backgroundColor: "white",
                width: "7rem",
                height: "2rem",
                marginTop: "1.3rem",
                border: "none",
                marginRight: "1rem",
              }}
            >
              Edit Patient
            </button>
          </div>

          <hr />

          <div className="row px-4 ">
            <div className="col-8">
              <div className="row">
                <div className="col-4 card p-2">
                  <img
                    style={{
                      width: "6rem",
                      height: "6rem",
                      margin: "auto",
                      borderRadius: "3rem",
                    }}
                    src="https://media.publit.io/file/w_700,h_774,c_fit,q_80/chrmpWebsite/chrmp-hero-banner.webp"
                  />
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    {data.name}
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      lineHeight: "-10px",
                      color: "gray",
                    }}
                  >
                   {data["e-email"]}
                  </p>
                  <div
                    className="mt-3"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <p style={{ lineHeight: "1px", fontWeight: "bold" }}>
                        {data.Past}
                      </p>
                      <span style={{ lineHeight: "1px" }}>Past</span>
                    </div>

                    <div>
                      <p style={{ lineHeight: "1px", fontWeight: "bold" }}>{data.Upcoming}</p>
                      <span style={{ lineHeight: "1px" }}>Upcoming</span>
                    </div>
                  </div>
                  <button
                    className="mt-1"
                    style={{
                      backgroundColor: "white",
                      color: "gray",
                      borderRadius: "0.3rem",
                    }}
                  >
                    
                    Send Message
                  </button>
                </div>
                <div className="col-8 card">
                  <div className="row mt-5">
                    <div className="col-4">
                      <div>
                        <p style={{ lineHeight: "1px", color: "gray" }}>
                          Gender
                        </p>
                        <p style={{ lineHeight: "9px" }}>{data.Gender}</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <p style={{ lineHeight: "1px", color: "gray" }}>
                          Birthday
                        </p>
                        <p style={{ lineHeight: "9px" }}>{data.Birthday}</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <p style={{ lineHeight: "1px", color: "gray" }}>
                          ph Number
                        </p>
                        <p style={{ lineHeight: "9px" }}>{data["Phone Number"]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-4">
                      <div>
                        <p style={{ lineHeight: "1px", color: "gray" }}>
                          Street Address
                        </p>
                        <p style={{ lineHeight: "17px" }}>{data["Street Address"]}</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <p style={{ lineHeight: "1px", color: "gray" }}>City</p>
                        <p style={{ lineHeight: "9px" }}>Pune</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <p style={{ lineHeight: "1px", color: "gray" }}>
                          Zop Code
                        </p>
                        <p style={{ lineHeight: "9px" }}>{data["ZIP Code"]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-4">
                      <div>
                        <p style={{ lineHeight: "1px", color: "gray" }}>
                          Member Status
                        </p>
                        <p style={{ lineHeight: "9px" }}>{data["Member Status"]}</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <p style={{ lineHeight: "1px", color: "gray" }}>
                          Register Date
                        </p>
                        <p style={{ lineHeight: "9px" }}>{data["Register Date"]}</p>
                      </div>
                    </div>
                    <div className="col-4"></div>
                  </div>
                </div>
              </div>

              <div className="row  mt-3 ">
                <div className="card">
                  <div>
                    <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link active"
                          id="ex1-tab-1"
                          data-mdb-toggle="tab"
                          href="#ex1-tabs-1"
                          role="tab"
                          aria-controls="ex1-tabs-1"
                          aria-selected="true"
                        >
                          Upcoming Appoinments
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link"
                          id="ex1-tab-2"
                          data-mdb-toggle="tab"
                          href="#ex1-tabs-2"
                          role="tab"
                          aria-controls="ex1-tabs-2"
                          aria-selected="false"
                          onClick={()=>{alert("in Progress")}}
                        >
                          Past Appoinment
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link"
                          id="ex1-tab-3"
                          data-mdb-toggle="tab"
                          href="#ex1-tabs-3"
                          role="tab"
                          aria-controls="ex1-tabs-3"
                          aria-selected="false"
                        >
                         Medical Records 
                        </a>
                      </li>
                    </ul>

                    <div class="tab-content" id="ex1-content">
                      <div
                        class="tab-pane fade show active"
                        id="ex1-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-1"
                      >
                       
                       <div>
                           <div style={{display:'flex',justifyContent:'space-between',paddingLeft:'1rem'}}>
                               <p>Root Canel Treatment</p>

                               <button style={{color:'gray',backgroundColor:'white',border:'2px solid silver',borderRadius:'0.3rem'}}><FontAwesomeIcon icon={faAngleUp} />  Show Previous Treatment</button>
                               
                           </div>
                           <hr />
                           
                           <div className="card mb-5">
                               <div className="row px-3">
                                   <div className="col-3">
                                       <p> {appoinment.Date}</p>
                                       <span>9:00 - 10:00</span>
                                   </div>
                                   <div className="col-3">
                                   <p> Treatment </p>
                                       <span>{appoinment.Treatment}</span>
                                   </div>
                                   <div className="col-2">
                                   <p> Dentist </p>
                                       <span>{appoinment.Dentist}</span>
                                   </div>
                                   <div className="col-2">
                                   <p> Nurse </p>
                                       <span>{appoinment.Nurse}</span>
                                   </div>
                                   <div className="col-2">
                                       <p style={{marginTop:'1rem'}}>Note</p>
                                   </div>
                               </div>
                           </div>

                           {/* <div className="card mt-3">
                               <div className="row px-3 ">
                                   <div className="col-3">
                                       <p> 26 Nov 19</p>
                                       <span>9:00 - 10:00</span>
                                   </div>
                                   <div className="col-3">
                                   <p> Treatment </p>
                                       <span>Open Access</span>
                                   </div>
                                   <div className="col-2">
                                   <p> Dentist </p>
                                       <span>Dr. Adam h</span>
                                   </div>
                                   <div className="col-2">
                                   <p> Nurse </p>
                                       <span>jessica</span>
                                   </div>
                                   <div className="col-2">
                                       <p style={{marginTop:'1rem'}}>Note</p>
                                   </div>
                               </div>
                           </div>

                           <div className="card mt-3">
                               <div className="row px-3 ">
                                   <div className="col-3">
                                       <p> 26 Nov 19</p>
                                       <span>9:00 - 10:00</span>
                                   </div>
                                   <div className="col-3">
                                   <p> Treatment </p>
                                       <span>Open Access</span>
                                   </div>
                                   <div className="col-2">
                                   <p> Dentist </p>
                                       <span>Dr. Adam h</span>
                                   </div>
                                   <div className="col-2">
                                   <p> Nurse </p>
                                       <span>jessica</span>
                                   </div>
                                   <div className="col-2">
                                       <p style={{marginTop:'1rem'}}>Note</p>
                                   </div>
                               </div>
                           </div> */}


                       </div>

                      </div>
                      <div
                        class="tab-pane fade"
                        id="ex1-tabs-2"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-2"
                      >
                        Tab 2 content
                      </div>
                      <div
                        class="tab-pane fade"
                        id="ex1-tabs-3"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-3"
                      >
                        Tab 3 content
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1rem",
                  }}
                >
                  <p>Notes</p>
                  <p style={{ color: "blue" }}>See all</p>
                </div>

                <div className="mt-3 px-4">
                  <p> - This patient is lorem hshhs shhhs </p>
                  <p> - lorem hhs gggd hsjfbgh </p>
                  <p> - At aleretic history with cataflome</p>

                  <button
                    className="mt-4 mb-4"
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      borderRadius: "0.3rem",
                      marginLeft: "60%",
                    }}
                  >
                    Save Note
                  </button>
                </div>
              </div>

              <div className="card mt-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1rem",
                  }}
                >
                  <p>Files / Documents</p>
                  <p style={{ color: "blue" }}>Add File</p>
                </div>

                <div className="">
                  <div
                    style={{
                      display: "flex",
                      color: "gray",
                      justifyContent: "space-between",
                      border: "1px solid silver",
                      margin: "1rem",
                      padding: "0.2rem",
                      borderRadius: "0.4rem",
                    }}
                  >
                    <p>CheckUp Result.pdf</p>
                    <p>123 kb</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      color: "gray",
                      justifyContent: "space-between",
                      border: "1px solid silver",
                      margin: "1rem",
                      padding: "0.2rem",
                      borderRadius: "0.4rem",
                    }}
                  >
                    <p>Dentel X-ray Result.pdf</p>
                    <p>123 kb</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      color: "gray",
                      justifyContent: "space-between",
                      border: "1px solid silver",
                      margin: "1rem",
                      padding: "0.2rem",
                      borderRadius: "0.4rem",
                    }}
                  >
                    <p>Medical priciptions.pdf</p>
                    <p>123 kb</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
