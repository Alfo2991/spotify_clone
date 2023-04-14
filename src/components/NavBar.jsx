import { Nav, NavItem } from "react-bootstrap";

const NavBar = () => {
  return (
    <Nav className="mainLinks d-none d-md-flex">
      <NavItem>
        <Nav.Link href="#" className="text-decoration-none">
          TRENDING
        </Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link href="#" className="text-decoration-none">
          PODCAST
        </Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link href="#" className="text-decoration-none">
          MOODS AND GENRES
        </Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link href="#" className="text-decoration-none">
          NEW RELEASES
        </Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link href="#" className="text-decoration-none">
          DISCOVER
        </Nav.Link>
      </NavItem>
    </Nav>
  );
};

export default NavBar;