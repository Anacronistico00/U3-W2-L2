import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
// import AllTheBooks from './components/AllTheBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import booksJson from '../src/data/fantasy.json';

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={booksJson} />
      <MyFooter />
    </>
  );
}

export default App;
