import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const SideBar = () => {
  const location = useLocation();

  return (
    <Navbar
      expand="md"
      bg="navbar"
      variant="dark"
      fixed="left"
      className="flex-md-column justify-content-between"
      style={{ marginBottom: "88px" }}
    >
      <Container className="nav-container">
        <Row>
          <Col xs={10} md={12} className="text-center text-md-left">
            <Link to="/" className="navbar-brand myLogo">
              <img
                src="/assets/logo/Spotify_Logo.png"
                width="131"
                height="40"
                className="d-inline-block align-top"
                alt="SpotifyLogo"
              />
            </Link>
          </Col>
          <Col xs={2} md={12} className="text-right">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>
        </Row>
        <Navbar.Collapse className="collapse navbar-collapse">
          <Nav className="flex-md-column">
            <Nav.Link as={Link} to="/" className="nav-link">
              <i className="fas fa-home fa-lg"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link as={Link} to="/yourLibrary" className="nav-link">
              <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
            </Nav.Link>
            {location.pathname === "/" && <SearchBar />}
          </Nav>
        </Navbar.Collapse>
        <Row>
          <Col xs={12} md={10}>
            <p>
              <a href="/">Cookie Policy</a> |<a href="\"> Privacy</a>
            </p>
          </Col>
          <Col xs={12} md={2} className="text-right">
            <Button className="signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="login-btn" type="button">
              Login
            </Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default SideBar;
