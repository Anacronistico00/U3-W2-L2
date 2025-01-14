import { useEffect, useState } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import { Alert, Spinner } from 'react-bootstrap';

const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg2NTk4MzBmZTRlMjAwMTU2Njg3YjgiLCJpYXQiOjE3MzY4NTc5ODgsImV4cCI6MTczODA2NzU4OH0.MGf5QS76_6IP8ViWJmoEUTEWv9nAx1kN1gmvOseZ5uk';

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getComments = async () => {
    const asin = props.asin;

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

      setComments(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.log('ERROR', error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getComments();
  }, [props.asin]);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin && this.props.asin !== null) {
  //     this.getComments();
  //   }
  // }

  return (
    <>
      <ul className='text-start p-0'>
        {isLoading && (
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
        {isError && (
          <div className='text-center'>
            <Alert variant='danger'>Si è verificato un errore</Alert>
          </div>
        )}
        <h5 className='text-center'>Comments</h5>
        <CommentsList comments={comments} updateComments={getComments} />
        <hr />
      </ul>
      <AddComment asin={props.asin} updateComments={getComments} />
    </>
  );
};

export default CommentArea;
