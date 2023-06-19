import React, { useEffect } from 'react'
import { ImLocation2 } from "react-icons/im";
import { BsFillHouseAddFill } from "react-icons/bs";

function ChefProfile() {

  useEffect(() => {
    function Read() {
     
      
      }
    return () => {   }
  }, [])
  
 

  return (
    <>
      <div style={{
        backgroundImage: `url(${require('./Images/HomeBg.jpg')})`
      }}>
        <div className=" d-flex justify-content-center align-items-center vh-100 ">
          <div className="row shadow-hover bg-body-tertiary rounded w-75   " >
            <div className="col-sm-12 col-md-5  ">
              <div><img src={require(`./Images/hero3.jpg`)} className="img-fluid object-fit-cover border rounded-5 m-2 " alt="..." /></div>
            </div>
            <div className="col-sm-12 col-md-6 ">
              <div className="fs-2 fw-bolder ">Sanjeev Kapoor</div>
              <div className="fs-6  fst-italic p-1 ">With years of experience in the culinary industry,
                He has developed a profound understanding of flavors,
                techniques, and ingredients from various cuisines around the world.
                Their culinary journey has taken them from humble beginnings to mastering the art.</div>
              <h6><ImLocation2 /> Mumbai </h6>
              <h5><BsFillHouseAddFill />  A/P-16,Agassi Road,Mumbai   </h5>

              <div>
                <span className="me-4">Veg</span><span>Non Veg</span>
              </div>

            </div>
            <input type="text" className="form-control form-control-sm text-primary w-25 m-1" placeholder="Days" />
            <div className="fs-5 fw-bold p-1 ">Rs. 2500/day</div>
            <button className="btn btn-warning w-100 mt-3 " type="button">BOOK NOW</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChefProfile
