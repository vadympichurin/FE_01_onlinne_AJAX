const BOOKS_URL = 'http://localhost:4040';

function updateBookById(bookId, update) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BOOKS_URL}/books/${bookId}`, options).then(res => res.json());
}

// updateBookById(10, { rating: 9 });
// updateBookById(11, { title: 'Як поработити світ!?' });
