import { Col, Container, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import { useState } from 'react';
import CommentArea from './CommentArea';

const BookList = (props) => {
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleBookSelect = (asin) => {
    setSelectedBook(asin === selectedBook ? null : asin);
  };

  const filteredBooks = props.books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
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
          value={search}
          onChange={handleSearch}
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
                  handleBookSelect={handleBookSelect}
                  asin={selectedBook}
                />
              ))}
            </div>
          </Col>
          <Col xs={5} className='h-100 position-sticky top-0 mt-5 pt-5'>
            <Container>
              {selectedBook ? (
                <CommentArea asin={selectedBook} />
              ) : (
                <p className='text-center mt-5 pt-5'>
                  Seleziona un libro per vedere i commenti.
                </p>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookList;
