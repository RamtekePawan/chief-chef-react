
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MyNavigationLinks(props) {

  const { userLoginData, setUserLoginData } = props;
  let nevigate = useNavigate();

  const logOutAction = () => {

    localStorage.removeItem("loginData");
    setUserLoginData(null);

    nevigate("/login");

  };

  return (
    <div>
      <Navbar bg="light" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home"><div className="navbar-brand text-warning d-flex align-items-center text-alert-success" style={{ fontSize: '45px' }}>
            <span className="ps-2 fs-2 " style={{ fontSize: '50px' }}>C</span>
            <span>hief</span><span className="ps-2 fs-2" style={{ fontSize: '50px' }}>C</span>hef</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>

              {!userLoginData &&
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              }

              {userLoginData && userLoginData.isAdmin &&
                <Nav.Link as={Link} to={"/chef-list"}>
                  Chef List
                </Nav.Link>
              }

              {userLoginData &&
                <Nav.Link as={Link} to={"/our-chefs"}>
                  Chefs Panel
                </Nav.Link>}

              {userLoginData &&
                <Nav.Link as={Link} to={"/chef-profile"}>
                  Chef Profile
                </Nav.Link>}

              {userLoginData && userLoginData.isAdmin &&
                <Nav.Link as={Link} to={"/chef-registration"}>
                  Chef Registration
                </Nav.Link>
              }

              {!userLoginData &&
                <Nav.Link as={Link} to={"/user-registration"}>
                  Sign Up
                </Nav.Link>
              }

              {userLoginData && userLoginData.isAdmin &&
                <Nav.Link as={Link} to={"/user-list"}>
                  User List
                </Nav.Link>}
              <Nav className="ms-auto">


                <Nav.Link as={Link} to={"/aboutus"}>
                  About Us
                </Nav.Link>


                <Nav.Link as={Link} to={"/contactUs"}>
                  Contact Us
                </Nav.Link>

                {userLoginData &&
                  <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
                }
              </Nav>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default MyNavigationLinks