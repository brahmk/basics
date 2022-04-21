
import fetch from 'node-fetch'


////async/await method

// async function   getDataAsync() {
// try {
// const response = await fetch('https://api.sampleapis.com/beers/ale') // GET request by default, returns Promise
// const data = await response.json()
//const beerName = data[10].name
// console.log(beerName)

// } catch(err){
//     console.log(err)
// } }

// getDataAsync();


// ////////////////////////////////////////////////////////////
////.then method


//  fetch('https://api.sampleapis.com/beers/ale') /////fetch always returns promise 
// .then(
//     (response) => {
//    return response.json    ///////if promise of fetching resolved THEN return data object
// })

// .then(data) => {   //// if data parsed as json resolved, THEN log data
//     console.log(data)
// }
// .catch(   /////OTHERWISE  catch err thrown from rejected promise :'(
//     (err) => {
//         console.error(err)
//     }


// )

/////////TO DO CHANGE RESPONSE VAR NAME

////.then again simplified function code
// fetch('https://api.sampleapis.com/beers/ale')

// .then(response => response.json())   ////removed curly braces and return since code is 1 line
// .then(data => console.log(data[87]) )
// .catch(err =>  console.error(err));

    


