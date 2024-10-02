'use strict';

let libraryBooks = [
    { title: 'The Road Ahead', author: 'Bill Gates', ID: 1235 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', ID: 4268 },
    { title: 'The Road Ahead', author: 'Bill Gates', ID: 4268 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', ID: 3257 }
];

// 1. addBook function
function addBook(title, author, ID) {
    // Check if the book with the given ID already exists
    const exists = libraryBooks.some((book) => book.ID === ID);
    if (!exists) {
        const newBook = { title, author, ID };
        libraryBooks.push(newBook);
        return newBook; // Return the newly created book
    }
}

// 2. getTitles function
function getTitles() {
    return libraryBooks.map((book) => book.title).sort(); // Sort titles alphabetically
}

// 3. findBooks function
function findBooks(keyword) {
    return libraryBooks.filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase())).sort((a, b) => a.ID - b.ID); // Sort books by ID
}

// Example usage:
// Adding a new book
console.log(addBook('Harry Potter', 'J.K. Rowling', 7890)); // Adds the book and returns the new object
console.log(addBook('The Road Ahead', 'Bill Gates', 1235)); // Does not add, book already exists

// Get all titles sorted alphabetically
console.log(getTitles()); // ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "The Road Ahead", "Walter Isaacson"]

// Find books by keyword in title
console.log(findBooks('Road')); // Returns books with "Road" in the title, sorted by ID
