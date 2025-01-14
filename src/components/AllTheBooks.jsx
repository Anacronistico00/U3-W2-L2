import { Component } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import Books from '../data/fantasy.json';

class AllTheBooks extends Component {
  state = {
    activeBook: Books[0],
  };

  render() {
    return (
      <Container
        fluid={true}
        className='d-flex flex-wrap justify-content-center mt-5'
      >
        {Books.map((book, i) => {
          return (
            <Card style={{ width: '16rem' }} key={i} className='mx-2 mb-2'>
              <Card.Img
                variant='top'
                src={book.img}
                style={{ height: '400px' }}
                className='w-100 object-fit-cover'
              />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title className='fw-bold'>{book.title}</Card.Title>
                <Card.Text className='ms-auto'>${book.price}</Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush text-center'>
                <ListGroup.Item className='fs-5 fw-bold'>
                  {book.category}
                </ListGroup.Item>
                <ListGroup.Item className='fs-6'>
                  ASIN: {book.asin}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default AllTheBooks;
