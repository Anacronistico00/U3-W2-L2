import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg2NTk4MzBmZTRlMjAwMTU2Njg3YjgiLCJpYXQiOjE3MzY4NTc5ODgsImV4cCI6MTczODA2NzU4OH0.MGf5QS76_6IP8ViWJmoEUTEWv9nAx1kN1gmvOseZ5uk';

const initialState = {
  comment: '',
  rate: 1,
};

const AddComment = (props) => {
  const [comments, setComments] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment();
  };

  const postComment = async () => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          ...comments,
          elementId: props.asin,
        }),
      });
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati dalla Api');
      }

      const data = await response.json();

      console.log('Commento inviato con successo', data);
      setComments(initialState);
      props.updateComments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Inserisci Commento</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            value={comments.comment}
            onChange={(e) => {
              setComments({ ...comments, comment: e.target.value });
            }}
            placeholder='Lascia un commento..'
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Valutazione</Form.Label>
          <Form.Select
            aria-label='Table size'
            value={comments.rate}
            onChange={(e) => {
              setComments({ ...comments, rate: e.target.value });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>

        <Button variant='success' type='submit'>
          Lascia un commento
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
