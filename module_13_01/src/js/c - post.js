const BOOKS_URL = 'http://localhost:4040';

const newBook = {
  title: 'Книга по JS',
  author: 'Я',
  genres: ['навчання', 'js'],
  rating: 10,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BOOKS_URL}/books`, options).then(res => res.json());
}

// addBook({
//   title: 'Найкраща книга по CSS',
//   author: 'Я',
//   genres: ['навчання', 'js'],
//   rating: 9,
// }).then(renderBook);

// addBook({
//   title: 'Найкраща книга по HTML',
//   author: 'Я',
//   genres: ['навчання', 'js'],
//   rating: 9,
// });


function renderBook(book){
    console.log('Render new book');
    console.log(book);
}