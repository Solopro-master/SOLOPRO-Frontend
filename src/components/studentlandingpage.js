import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Player } from '@lottiefiles/react-lottie-player';
import BLOG from './BLOG.json'; // Import the Lottie animation JSON file
import Investor from './investor.json'
import mentor from './mentor.json'
import Navbar from './nav1';
import logo from '../images/image.svg'
import community from '../images/community.json'
const StudentLandingPage = () => {
  const services = [
    {
      title: 'Blog',
      animationUrl: BLOG, // Use the imported BLOG object directly
      link: '/student/blogs'
    },
    {
      title: 'Find Investor',
      animationUrl: Investor,
      link: '/student/investorpage'
    },
    {
      title: 'Find Mentor',
      animationUrl: mentor,
      link: '/student/mentorpage'
    },
    {
      title: 'Community',
      animationUrl:community,
      link:'/student/community'
    },
    {
      title: 'Find Entrepreneur',
      animationUrl: BLOG, // Use the imported BLOG object directly
      link: '/student/Entrepreneur'
    }
  ];

  return (
    <div>
      {/* <Navbar className=" nav1">
        <Container>
          <Navbar.Brand href="">
            <img
              src={logo} 
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              
            />
            
          </Navbar.Brand>
         
        </Container>
        
      </Navbar> */}
      <Navbar />
      <p className="text-centre" style={{ color: "white", fontWeight: 500, fontSize: "1.75rem", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>SOLOPRO</p>
      
    <div style={{ backgroundColor: '#040F15', minHeight: '100vh', }}>
      
      <Container>
        <Row className="text-center" style={{justifyContent:'center'}}>
          {services.map((service, index) => (
            <Col key={index} xs={16} md={6} lg={3} className="mb-4">
              <Card className="h-100" style={{ backgroundColor: '#040F15', color: 'white', border:'groove' }}>
                <Card.Body>
                  <Player
                    src={service.animationUrl}
                    className="mx-auto"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                    style={{ height: '200px' }}
                    onError={(error) => console.log('Lottie Error:', error)}
                  />
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>
                    {`Explore our ${service.title} services.`}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href={service.link} className="btn btn-primary">
                    Take me there
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default StudentLandingPage;
