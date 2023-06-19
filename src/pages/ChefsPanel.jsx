import hero1 from "./Images/hero1.jpg"
import hero2 from "./Images/hero2.jpg"
import hero3 from "./Images/hero3.jpg"
import hero4 from "./Images/hero4.jpg"
import hero5 from "./Images/hero5.jpg"
import hero6 from "./Images/hero6.jpg"
import hero7 from "./Images/hero7.jpg"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"



export default function ChefsPanel() {
  const navigate = useNavigate();

 
  const [chefList, setChefList] = useState([]);
  

  useEffect(() => {
    getAllChefAction();
  }, []);

  let getAllChefAction = async () => {
    let url = `http://localhost:4000/find-all-chef`;
    let res = await fetch(url);
    let list = await res.json();
    console.log(list);
    // list updated.
    let newlist = [...list];
    setChefList(newlist);
  };

  let handleClick = () =>{  }


  return (
    <>
      <h1 className="text-center mt-3 p-4  bg-dark-subtle form-notch-leading"> OUR TOP CHEFS</h1>

      <div className="row mt-4 p-4  " style={{ width: "80wh" }}>
        {chefList.map((item, index) => (
          <div className="col-sm-12 col-md-3 mb-4 shadow-4-strong rounded-bottom-4">
            <div>
              <img
                //src={`https://picsum.photos/${300 + index}`}
                // src={hero3}
                src={require(`./Images/hero${index+1}.jpg`)}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <p className="fs-5">
                {item.name}<br />
                {item.speciality}
              </p>
              <div className="pb-4">
                <button className="btn btn-warning btn-lg rounded-pill" onClick={handleClick}>999/day</button>
              </div>
            </div>
          </div>
        ))}
      </div>


    </>
  );

}

//<Link to={`users/${user.id}`}>My Link</Link>
//{/* Link component Without parameter */}
 {/* <Link to="/about">About</Link> */}

// {/* <Link   to={
//   {/* this object inside the  tag */}
//        {     
//          pathname: '/read',
//          state:this.state
//         }
//   }> 
// <Card.Link  >Another Link</Card.Link>
// </Link> */}