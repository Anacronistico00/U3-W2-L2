import { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class SingleBook extends Component {
  // state = {
  //   selected: false,
  // };

  // handleClick = () => {
  //   this.setState({
  //     selected: !this.state.selected,
  //   });
  // };
  render() {
    return (
      <Card
        style={{
          width: '16rem',
          margin: '7px',
          border:
            this.props.asin === this.props.book.asin ? '1px solid red' : 'none',
        }}
        onClick={() => {
          // this.handleClick();
          this.props.handleBookSelect(this.props.book.asin);
        }}
      >
        <Card.Img
          variant='top'
          style={{ height: '400px' }}
          src={this.props.book.img}
          alt={this.props.book.title}
        />
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title className='fw-bold'>{this.props.book.title}</Card.Title>
          <Card.Text className='ms-auto'>${this.props.book.price}</Card.Text>
          <ListGroup className='list-group-flush text-center'>
            <ListGroup.Item className='fs-5 fw-bold'>
              {this.props.book.category}
            </ListGroup.Item>
            <ListGroup.Item className='fs-6'>
              ASIN: {this.props.book.asin}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
