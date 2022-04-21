const promise1 = new Promise ((resolve, reject)) => {
resolve("promise resolved!");
}

promise1.then((value) => console.log(value));