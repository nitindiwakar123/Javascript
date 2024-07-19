//Activity 1: Object Creation and Access
//Task 1:
const book = {
    title: 'book-title',
    author: 'Author Name',
    year: 2000,
    method1: function () {
        console.log(`Method 1 Called!`);
        console.log(this.title);
        console.log(this.author);
    },
    method2: function (year) {
        console.log('Method 2 Called');
        this.year = year;
        console.log(this.year);
    }
}
console.log(book);
//Task 2:
console.log(book.title);
console.log(book['author']);

//Activity 2: Object Methods
//Task 3:
book.method1();

//Task 4:
book.method2(2005);

// Activity 3: Nested Objects
//Task 5:
const myLibrary = {
    name: "Meri Library",
    books: [
        {
            title: "C Programming",
            author: "Dennis Ritchie"

        },
        {
            title: "Learn JavaScript",
            author: "Brendan Eich"
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki and Sharon Lechter"
        },
        {
            title: "The Adventures of Tom Sawyer",
            author: "Mark Twain"
        }
    ],

}
console.log(`The Name of Library is: ${myLibrary}`);

//Task 6:
console.log(myLibrary.name);
myLibrary.books.forEach((item) => {
    console.log(item.title);
})

//Activity 4: The this Keyword
//Task 7:
book.method1();

//Activity 5: Object Iteration
//Task 8:
console.log('for in loop:');
for (const key in book) {

    console.log(`Key: ${key}, Value: ${book[key]}`);

}

//Task 9:
console.log('Object.keys() and Object.values()');
console.log(`The Keys of Book Object: ${Object.keys(book)}`);
console.log(`The Values of Book Object: ${Object.values(book)}`);
