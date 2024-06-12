// Problem 6:
// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.


const book = {
        title: "learning python",
        author: "nam jani na",
        year: 2005
    }
const book2 =
    {
        title: "java",
        author: "keu ekjon",
        year: 2020
    }
const book3 =
    {
        title: "javascript",
        author: "eitaro nam jani na",
        year: 2024
    }

function isRecentBook(book) {
    const currentYear = new Date().getFullYear();
    return currentYear - book.year <= 5;
}

console.log("Recent book: ", isRecentBook(book));
