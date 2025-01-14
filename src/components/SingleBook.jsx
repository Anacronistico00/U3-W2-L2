import { Card, ListGroup } from 'react-bootstrap';

const SingleBook = (props) => {
  return (
    <Card
      style={{
        width: '16rem',
        margin: '7px',
        border: props.asin === props.book.asin ? '1px solid red' : 'none',
      }}
      onClick={() => {
        props.handleBookSelect(props.book.asin);
      }}
    >
      <Card.Img
        variant='top'
        style={{ height: '400px' }}
        src={props.book.img}
        alt={props.book.title}
      />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title className='fw-bold'>{props.book.title}</Card.Title>
        <Card.Text className='ms-auto'>${props.book.price}</Card.Text>
        <ListGroup className='list-group-flush text-center'>
          <ListGroup.Item className='fs-5 fw-bold'>
            {props.book.category}
          </ListGroup.Item>
          <ListGroup.Item className='fs-6'>
            ASIN: {props.book.asin}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
