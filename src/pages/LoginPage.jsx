import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import bg from "./Images/background.jpg";
function LoginPage(props) {
  const { setUserLoginData } = props;
  const navigate = useNavigate();

  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newuser = { ...user, [name]: value };
    setUser(newuser);
  }

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND :: ...
      let url = `http://localhost:4000/login`;
      let data = { email: user.email, password: user.password };
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let loginData = await res.json();
      // console.log(loginData);
      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      setUserLoginData(loginData);
      
      localStorage.setItem("loginData", JSON.stringify(loginData));
      navigate("/home", { replace: true });

    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };

  
  return (
    <>
      <div className="row justify-content-center align-items-center" style={{ height: "80vh" }}>
        <div className="col-sm-12 col-md-6 mb-3 bg-light-subtle  align-items-center" >
          <div className="fs-2">Login Form</div>
          <form ref={formRef} className="needs-validation">
            <input
              type="email"
              className="form-control form-control-lg mb-2 rounded-pill ps-3"
              placeholder="Enter Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              className="form-control form-control-lg mb-2 rounded-pill"
              placeholder="Enter password"
              value={user.password}
              name="password"
              onChange={handleChange}
              required
            />

            <input
              type="button"
              value="Login"
              className="w-100 btn btn-lg btn-warning rounded-pill"
              onClick={loginAction}
            />
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}

        </div>
      </div>
    </>
  );
}

export default LoginPage;
