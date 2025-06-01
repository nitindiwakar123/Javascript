// Difference between Promise and Async Await
//In JavaScript, a promise represents the eventual completion or failure of an asynchronous operation. Async/await simplifies writing asynchronous code, offering a more readable and concise syntax.

//Async/Await
//You must have heard that “Async Await is a syntactic sugar on top of Promises”. It makes the asynchronous code easier to read, write, and maintain asynchronous code. Instead of chaining Promises together, Async Await allows developers to write code that looks like synchronous code

//Async Await uses only two keywords: async and await. The async keyword is used to declare that a particular function is asynchronous. The await keyword waits for the execution of the async function’s code block until a promise is fulfilled or rejected.

const fetchData = async() => {
    try {
        const response = await fetch('https://api.github.com/users/nitindiwakar123');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

// Sync and Async Functions
// In advanced programming languages, there are two kinds of function behaviour, synchronous and asynchronous. In javascript context, when a synchronous function is called, the code execution is paused until the function returns. It means that the main thread is blocked, and other functions cannot be executed until the current operation has been completed.

// On the other hand, asynchronous functions are non-blocking. When an asynchronous function is called, the function returns immediately without blocking the main thread. The function may take some time to complete, like fetching an image from the server, and the code execution continues in the meantime. When the function completes, it triggers a callback function or a promise, which allows the calling code to continue with the result. For further information, visit this blog.
