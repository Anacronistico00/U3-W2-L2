import { Col, Container, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import { Component } from 'react';
import CommentArea from './CommentArea';

class BookList extends Component {
  state = {
    search: '',
    selectedBook: null,
  };

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleBookSelect = (asin) => {
    this.setState({
      selectedBook: asin === this.state.selectedBook ? null : asin,
    });
  };

  render() {
    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div>
        <div>
          <h1 className='text-center my-3 fw-bolder'>Welcome to My Library!</h1>
        </div>
        <div style={{ margin: '1rem', textAlign: 'center' }}>
          <input
            type='text'
            placeholder='Search for a Book...'
            value={this.state.search}
            onChange={this.handleSearch}
            style={{ padding: '0.5rem', width: '50%', fontSize: '1rem' }}
          />
        </div>
        <Container fluid>
          <Row>
            <Col xs={7}>
              <div className='d-flex flex-wrap justify-content-center'>
                {filteredBooks.map((book, i) => (
                  <SingleBook
                    key={i}
                    book={book}
                    handleBookSelect={this.handleBookSelect}
                    asin={this.state.selectedBook}
                  />
                ))}
              </div>
            </Col>
            <Col xs={5}>
              {this.state.selectedBook ? (
                <CommentArea asin={this.state.selectedBook} />
              ) : (
                <p className='text-center mt-5 pt-5'>
                  Seleziona un libro per vedere i commenti.
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;
