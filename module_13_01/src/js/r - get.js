const BOOKS_URL = 'http://localhost:4040';

function fetchBooks (){
    return fetch(`${BOOKS_URL}/books`).then(res => res.json());
}

function fetchBookById(bookId){
    fetch(`${BOOKS_URL}/books/${bookId}`).then(res => res.json())
}


// fetchBooks();
// fetchBookById(5);
