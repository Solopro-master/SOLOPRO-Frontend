import { CiHeart } from "react-icons/ci";
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"; 
import './FirstPage.css';
  const currentYear = new Date().getFullYear(); // Fetches the current year


function Footer() {
  return (
    <footer className="foot text-center text-lg-start">
      <section className="foot d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <Link to="#!" className="me-4 text-reset">
            <i className="fab icon-facebook-f footer-icon" />
          </Link>
          <Link to="#!" className="me-4 text-reset">
            <i className="fab icon-twitter footer-icon" />
          </Link>
          <Link to="#!" className="me-4 text-reset">
            <i className="fab icon-google footer-icon" />
          </Link>
          <Link to="#!" className="me-4 text-reset">
            <i className="fab icon-instagram footer-icon" />
          </Link>
          <Link to="#!" className="me-4 text-reset">
            <i className="fab icon-linkedin footer-icon" />
          </Link>
          <Link to="#!" className="me-4 text-reset">
            <i className="fab icon-github footer-icon" />
          </Link>
        </div>
      </section>
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <CiHeart />
                Solopro
              </h6>
              <p>Elevating Startups</p>
            </Col>

            

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <Link to="/login" className="text-reset">
                  Find Investors
                </Link>
              </p>
              <p>
                <Link to="/login" className="text-reset">
                  Find Mentors
                </Link>
              </p>
            </Col>

           
            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Engage Us</h6>
              <p>
                <i className="icon-home me-3" />Chennai,IN
              </p>
              <p>
                <i className="icon-envelope me-3" />
                soloprobusiness@gmail.com
              </p>
              <p>
                <i className="icon-phone me-3" /> +919962624692
              </p>
              <p>
                <i className="icon-print me-3" /> +919444179755
              </p>
               <p>
                <i className="icon-print me-3" /> +917338755175
              </p>
            </Col>
          </Row>
        </Container>
      </section>

     <div className="text-center p-4">
      © {currentYear} Copyright:
      <Link className="text-reset fw-bold" to="https://solopro.co.in/">Solopro.co.in</Link>
    </div>
    </footer>
  );
}

export default Footer;
