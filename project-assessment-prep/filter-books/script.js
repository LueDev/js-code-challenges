/* When the button is clicked, use the filter method to filter the books array and create a new array named filteredBooks 
that contains only the books in the genre that the user entered - this shuld be case insensitive.
Then, call the renderBookList function with your new array.
*/

const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian Fiction' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Classic Fiction' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic Fiction' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { title: 'To the Lighthouse', author: 'Virginia Woolf', genre: 'Modernist Fiction' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { title: 'Moby-Dick', author: 'Herman Melville', genre: 'Classic Fiction' },
    { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction' },
    { title: 'The Odyssey', author: 'Homer', genre: 'Epic Poetry' },
  ];

// STEP 1. Grab the DOM Elements we will interact with.
// HINT: It's best to make DOM interacting variables global
const userInput = document.getElementById('genre-input')
const button = document.getElementById('filter-button')
// const container = document.getElementById('book-list') 

document.addEventListener("DOMContentLoaded", () => {
    renderBookList(books)

    // STEP 3. Add our button event listener with click and anonymous function
    button.addEventListener('click', () => {

        const selectedGenre = userInput.value.toLowerCase()

        if(selectedGenre) {
            const filteredBooks = filterBooks(selectedGenre)
            renderBookList(filteredBooks)

            // Show a table of the filtered books in the console
            console.table(filteredBooks)
        }
    })


})

function filterBooks(genre) {
// Implement your logic here
// Use the filter method to filter the books array
// Return the filtered array

//STEP 2. declare the filter function where only books with the correct 
// genre entered by the user will be returned 
const list = books.filter((book) => book.genre.toLowerCase() === genre)
return list
}

function renderBookList(books) {
    const bookList = document.getElementById('book-list')
    bookList.innerHTML = ''

    books.forEach(book => {
        const li = document.createElement('li')
        li.innerText = `${book.title} by ${book.author} (${book.genre})`
        bookList.appendChild(li);
    });
}

  
  