//Promises
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Creating Own Promises
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls , cryptography, network
    setTimeout(function () {
        console.log('Async Task is Complete');
        resolve()
    }, 1000)
});

promiseOne.then(function () {
    console.log('Promise Consumed!');
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task 2');
        resolve();
    }, 1000)
}).then(function () {
    console.log('Task 2 Completed!');
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "Nitin", email: "some@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "hitesh", password: "1234" })
        }
        else {
            reject('error! something went wrong.')
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => {
    console.log('The Promise is Either Resolved or Rejected!');
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ language: "Javascript", password: "js" })
        }
        else {
            reject('error! Javascript went wrong.')
        }

    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

//fetching an api using async-await and fetch() method
// async function getAllUsers(){
//    try {
//     const response =  await fetch('https://api.github.com/users/nitindiwakar123');
//     // console.log(response);
//    const data = await response.json();
//    console.log(data);
//    } catch (error) {
//     console.log('E: ', error);
//    }
// }

// getAllUsers()


//fetching an api using then() catch() finnaly() and fetch() method

fetch('https://api.github.com/users/nitindiwakar123')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
