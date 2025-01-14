import { Component } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import { Alert, Spinner } from 'react-bootstrap';

const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMGRkNTBlYTI4NjAwMTUyOGI5NTgiLCJpYXQiOjE3MzY2NzcyMjksImV4cCI6MTczNzg4NjgyOX0.zLzKm3iXeO3hZs1lPOOWUq6Ap9M1YDAS06cSDSgRtm8';

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  getComments = async () => {
    const asin = this.props.asin;

    try {
      const response = await fetch(URL + asin, {
        headers: {
          Authorization: token,
        },
      });
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati dalla API');
      }

      const data = await response.json();
      console.log(data);

      this.setState({
        comments: data,
        isLoading: false,
        isError: false,
      });
    } catch (error) {
      console.log('ERROR', error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin && this.props.asin !== null) {
      this.getComments();
    }
  }

  render() {
    return (
      <>
        <ul className='text-start p-0'>
          {this.state.isLoading && (
            <div className='text-center'>
              <div>
                <p>Caricamento in corso...</p>

                <Spinner
                  animation='grow'
                  size='sm'
                  variant='info'
                  className='ms-2'
                />
                <Spinner
                  animation='grow'
                  size='sm'
                  variant='info'
                  className='ms-2'
                />
                <Spinner
                  animation='grow'
                  size='sm'
                  variant='info'
                  className='ms-2'
                />
              </div>
            </div>
          )}
          {this.state.isError && (
            <div className='text-center'>
              <Alert variant='danger'>Si è verificato un errore</Alert>
            </div>
          )}
          <h5 className='text-center'>Comments</h5>
          <CommentsList
            comments={this.state.comments}
            updateComments={this.getComments}
          />
          <hr />
        </ul>
        <AddComment asin={this.props.asin} updateComments={this.getComments} />
      </>
    );
  }
}

export default CommentArea;
