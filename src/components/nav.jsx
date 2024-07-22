import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import soloLogo1 from '../images/image.svg';
import '../css/style.css';

const Navbarr = () => {
    return (
        <Navbar expand="lg" className="rounded-4 mt-lg-1 mx-lg-1 rounded-sm-0 mt-md-1 mx-sm-0 flex-nowrap">
            <Container fluid>
                {/* Brand centered for mobile */}
                <div className="d-lg-none w-100 text-center mb-3">
                    <Navbar.Brand href="/" className="mx-auto d-inline-flex align-items-center">
                        <img src={soloLogo1} alt='logo' className="me-2" style={{ height: '50px' }} />
                        <span className="align-self-center" style={{ color: 'black' }}>SOLOPRO</span>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto d-lg-none" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto flex-column flex-lg-row">
                    <Nav.Link href="#capablity" className='text-nowrap'>Join our Tribe!</Nav.Link>
                        
                        <Nav.Link href="#Serviceee" className='text-nowrap'>Our Initiatives</Nav.Link>
                        <Nav.Link href="#timeline" className='text-nowrap'>Our Storyline</Nav.Link>
                    </Nav>
                    {/* Register and Login links for mobile */}
                    <Nav className="ms-auto flex-column flex-lg-row d-lg-none">
                        <Nav.Link href="/signUp" className='text-nowrap'>Register Now</Nav.Link>
                        <Nav.Link href="/login" className='text-nowrap'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* Brand centered for large screens */}
                <div className="d-none d-lg-flex w-100 justify-content-center mb-3">
                    <Navbar.Brand href="/" className="d-flex align-items-center">
                        <img src={soloLogo1} alt='logo' className="me-2" style={{ height: '50px' }} />
                        <span className="align-self-center">SOLOPRO</span>
                    </Navbar.Brand>
                </div>
                {/* Register and Login links for large screens */}
                <div className="d-none d-lg-flex ms-auto">
                    <Nav>
                        <Nav.Link href="/signUp" className='text-nowrap custom-nav-link'>Register Now</Nav.Link>
                        <Nav.Link href="/login" className='text-nowrap custom-nav-link'>Login</Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};

export default Navbarr;
