const BOOKS_URL = 'http://localhost:4040';

function removeBookById(bookId) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BOOKS_URL}/books/${bookId}`, options).then(res => res.json());
}

// removeBookById(41);
// removeBookById(39);
// removeBookById(3);
