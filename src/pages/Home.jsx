
import R1 from "./Images/R_AndreaPiacquadio.jpg";
import R2 from "./Images/R_JigarMaru.jpg";
import R3 from "./Images/R_JorgeWick.jpg";
import R4 from "./Images/R_RiyaChaudhari.jpg";
import R5 from "./Images/R_SindreRichard.jpg";
import "./Style.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* hero */}
      <div className="row  my-4 align-items-center">
        <div className="col-md-6 col-sm-12">
          <div className="row justify-content-center ">
            <div className="col-6">
              <h1 className="fa-school-flag fs-1">Chief Chef</h1>
              <p>Enjoy a customized culinary experience with a Chief Chef in the comfort of your own home.
              </p>
              <button className="btn fs-6 btn-lg rounded-pill btn-warning border-1"><Link to={"/our-chefs"}> Get Started</Link></button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-9 pe-2" alt="..." style={{ height: '70vh', width: "100%" }} />
        </div>
      </div>
      <hr />

      {/* Our Golas */}
      <div className="row justify-content-center mt-4 " >
        <div className="col-sm-12 col-md-10 rounded-9 opacity-100 bg-image bg-body-secondary">
          <div className="row justify-content-center mt-5">
            <div className="col-3 text-center">
              <h3 className="fa-school-flag fs-1 py-3 shadow-6-soft fw-bold border rounded-9 border-3 border-info text-dark">Our Goals</h3>
            </div>
          </div>
          <div className="row justify-content-center text-capitalize  text-center text-dark-emphasis  fw-semibold">
            <div className="col-10 p-2 mt-4 ">
              <h5 className="fw-bold fst-italic shadow-5-strong p-3"> "Clearly communicate the unique selling points of your app. Let users know how your app connects them with skilled chefs and enhances their culinary experiences."</h5></div>

            <div className="col-10 p-2 mt-4">
              <h5 className="fw-bold fst-italic shadow-5-strong p-3">"Showcase featured chefs or recent additions to your app. Display their profiles prominently, including their names, photos, specialties, experience, and ratings. Users should be able to click on a chef's profile to access detailed information."</h5></div>

            <div className="col-10 p-2 mt-4">
              <h5 className="fw-bold fst-italic shadow-5-strong p-3">"Provide chefs with a platform to receive feedback and ratings from customers who have availed their services. Positive reviews and ratings can help chefs build a strong reputation and attract more clients."</h5></div>

            <div className="col-10 mt-4 mb-5">
              <h5 className="fw-bold fst-italic shadow-5-strong p-3"> "Ensure that chefs have clear and transparent pricing structures for their services. The app should enable secure and seamless payment transactions, making it convenient for both chefs and customers."</h5></div>

          </div>
        </div>
      </div>


      <div className="row justify-content-center mt-4">
        <div className="col-10">
          <div className="row mt-4 border-top">
            <h1 className="form-notch-trailing fa-school-flag my-4">More than 31000 guests have already enjoyed the experience </h1>
          </div>
          {/* 1 */}
          <div className="row my-2 border-top pt-2 justify-content-center align-items-center h-auto bg-light-subtle">
            <div className="col-md-5 col-sm-12 justify-content-center ">
              <img src={R1} className="img-fliud rounded-end-circle rou" width="250px" height="300px" alt="Review" />
            </div>
            <div className="col-md-7 col-sm-12 justify-content-center">
              <h5 className="fst-italic mx-auto">"The Chief Chef app has completely revolutionized the way I approach cooking! With its user-friendly interface and extensive recipe database, I can easily find delicious and healthy meals to prepare for my family. Thank you for simplifying my culinary experience!"</h5>
              <h6 className="textend">-Andrea Piacquadio</h6>
            </div>
          </div>
          {/* 2 */}
          <div className="row my-2 border-top pt-2 justify-content-center align-items-center bg-light-subtle">
            <div className="col-md-7 col-sm-12 justify-content-center ">
              <h5 className="fst-italic">
                "I love using the Chief Chef app to explore new cuisines and expand my culinary skills. The step-by-step instructions and helpful videos make it so easy to follow along and create restaurant-quality dishes in the comfort of my own kitchen. Highly recommended!"
              </h5>
              <h6 className="textend">-Jigar Maru</h6>
            </div>

            <div className="col-md-5 col-sm-12 d-flex justify-content-end ">
              <img src={R2} className="rounded-start-circle " width="250px" height="300px" alt="Review" />
            </div>
          </div>
          {/* 3 */}
          <div className="row my-2 border-top pt-2 justify-content-center align-items-center h-auto bg-light-subtle">
            <div className="col-md-5 col-sm-12 justify-content-center ">
              <img src={R3} className="img-fliud rounded-end-circle" width="250px" height="300px" alt="Review" />
            </div>
            <div className="col-md-7 col-sm-12 justify-content-center">
              <h5 className="fst-italic mx-auto">"As someone with dietary restrictions, the Chief Chef app has been a game-changer for me. The ability to filter recipes based on specific ingredients or dietary preferences has made meal planning a breeze. It's like having a personal chef at my fingertips!"
              </h5>
              <h6 className="textend">-Jorge Wick</h6>
            </div>
          </div>
          {/* 4 */}
          <div className="row my-2 border-top pt-2 justify-content-center align-items-center bg-light-subtle">
            <div className="col-md-7 col-sm-12 justify-content-center ">
              <h5 className="fst-italic">
                "I can't say enough good things about the Chief Chef app. It not only provides amazing recipes but also offers meal planning and grocery list features, which have simplified my life immensely. Now I can effortlessly plan my weekly meals and shop with confidence. Thank you, Chief Chef!"
              </h5>
              <h6 className="textend">-Riya Chaudhari</h6>
            </div>
            {/* 5 */}
            <div className="col-md-5 col-sm-12 d-flex justify-content-end ">
              <img src={R4} className="rounded-start-circle " width="250px" height="300px" alt="Review" />
            </div>

          </div>

          {/* 5 */}
          <div className="row my-2 border-top mb-10 pt-2 justify-content-center align-items-center h-auto bg-light-subtle">
            <div className="col-md-5 col-sm-12 justify-content-center ">
              <img src={R5} className="img-fliud rounded-end-circle" width="250px" height="300px" alt="Review" />
            </div>
            <div className="col-md-7 col-sm-12 justify-content-center">
              <h5 className="fst-italic mx-auto">"I've always wanted to learn how to cook, and the Chief Chef app has been my ultimate guide. The comprehensive collection of beginner-friendly recipes, along with the clear instructions and helpful tips, has boosted my confidence in the kitchen. Thanks to Chief Chef, I'm now cooking meals I never thought I could!"</h5>
              <h6 className="textend">-Sindre Richard</h6>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="border-bottom">
        <link rel="stylesheet" href="Style.css" />
        <footer>
          <div className="footer-section">
            <h2 className="mb-4"><span className="border-bottom pb-1">Follow Us</span></h2>
            <ul className="social-media align-items-center">
              <li><SocialIcon url="https://twitter.com" /><span className="fs-3 ps-2"> Twitter</span></li>
              <li><SocialIcon url="https://facebook.com/jaketrent" /><span className="fs-3 ps-2"> FaceBook</span></li>
              <li><SocialIcon url="https://instagram.com/jaketrent" /><span className="fs-3 ps-2"> Instagram</span></li>
              <li><SocialIcon url="https://linkedin.com/jaketrent" /><span className="fs-3 ps-2"> LinkedIn</span></li>
              <li><SocialIcon url="https://youtube.com/jaketrent" /><span className="fs-3 ps-2"> Youtube</span></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="mb-4"><span className="border-bottom pb-1">Contact</span></h2>
            <p>Phone: <span className="contact-info">123-456-7890</span></p>
            <p>Email: <span className="contact-info">info@example.com</span></p>
          </div>
          <div className="footer-section">
            <h2 className="mb-4"><span className="border-bottom pb-1">Sitemap</span></h2>
            <ul className="sitemap">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="mb-4"><span className="border-bottom pb-1">Our Offices</span></h2>
            <ul className="country-list">
              <li>
                <h4>United States</h4>
                <p>Address: 123 Main St, New York, NY <br />Phone: 123-456-7890</p>
              </li>
              <li>
                <h4>United Kingdom</h4>
                <p>Address: 456 High St, London <br />Phone: 987-654-3210</p>

              </li>
              <li>
                <h4>Australia</h4>
                <p>Address: 789 Beach Rd, Sydney <br />Phone: 555-123-4567</p>

              </li>
            </ul>
          </div>
        </footer>
      </div>
      <footer>
        <p>&copy; 2023 Chief Chef. All rights reserved.</p>
      </footer>

    </>
  );
};



export default Home;
