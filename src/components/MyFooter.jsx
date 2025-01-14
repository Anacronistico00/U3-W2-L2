import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer>
      <Container fluid={true} className='bg-dark pb-4'>
        <Row className='text-white text-center pt-3'>
          <Col>
            <h3>Contacts</h3>
          </Col>
        </Row>
        <Row className='text-white col-1 m-auto text-center'>
          <Col className='d-flex flex-column'>
            <a href='#' className='text-decoration-none text-white mt-3'>
              Instagram
            </a>
            <a href='#' className='text-decoration-none text-white mt-3'>
              Facebook
            </a>
            <a href='#' className='text-decoration-none text-white mt-3'>
              Email
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
