//JavacScript Promises
//Javascript is a synchronous programming language where instructions are blocked until the current task is completed. But there might be cases where we don't want the program execution to wait, like making an API(Application Programming Interface) call to fetch data. In these cases where asynchronous operations have to be performed, we use Callback, Promises, and async-await. 

//When a JavaScript promise is defined, it will be resolved when the time comes or rejected. JavaScript promises are objects that represent the eventual completion or failure of an asynchronous operation. 

//Creating a JavaScript Promise
//Let's create our first JavaScript Promise. To create a Promise object, we make use of a constructor. It takes two parameters, one for the success case(resolve) and the other for the failure case(reject). Then we use the if-else statement to specify what to do in the success and failure case. If the given condition is met, the promise will be resolved. Otherwise, it will be rejected.
const firstPromise = new Promise((resolve, reject) => {
    let condition = true;

    if(condition) {
        resolve('Promise is Resolved!')
    }
    else{
        reject('Promise Rejected!')
    }
});

//Consuming a JavaScript Promise 
//Now let's use the promise we have created. If the promise is resolved, the .then() method is called. Else if the promise is rejected, it will jump to the catch( ) method.

const checkPromise = () => {
    firstPromise.then((value) => {
        console.log(value);
    }).catch((error) => {
        console.log(error);
    })
}

checkPromise();

//Promise Chaining
//If there are multiple asynchronous operations to be done and if we try to use Callbacks for them, we'll find ourselves inside a situation called the Callback hell. This situation is solved using promise chaining.

const secondPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const flag = true;
            if(flag){
                resolve('Second Promise is Resolved!')
            }
            else{
                reject("Second Promise is Rejected!")
            }
        }, 1000);
    });
};

const thirdPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = false;
            if(flag){
                resolve('Third Promise is Resolved!')
            }
            else{
                reject('Third Promise is Rejected!')
            }
        }, 1000);
    })
}

const checkPromiseTwo = () => {
    secondPromise().then((value1) => {
        console.log(value1);
        return thirdPromise();
    }).then((value2) => {
        console.log(value2);
    }).catch((err) => {
        console.log(err);
    })
}

checkPromiseTwo()
