import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import Benefits from './Benefits';
import Drawbacks from './Drawbacks';
import { Link } from 'react-router-dom';
import '../format.css'

export default function NavbarGUI() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/g4g/#/">EV Sustainability</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Text>
                <Link className="nav-thing" to="/">Home</Link>
                <Link className="nav-thing" to="/benefits">Benefits</Link>
                <Link className="nav-thing" to="/drawbacks">Drawbacks</Link>
              </Navbar.Text>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/benefits"} element={<Benefits />} />
          <Route path={"/drawbacks"} element={<Drawbacks />} />
        </Routes>
      </div>
    </Router>
  );
}