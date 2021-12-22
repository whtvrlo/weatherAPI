import './App.css';

// const App = () => {

//   const handleFetch = async () => {
//     const response = await fetch("https://api.chucknorris.io/jokes/random") 
//     console.log(response)

//   }

//   return (
//     <div className="App">
//      <h1>hi there</h1>
//      <button onClick={handleFetch}>click me</button>
//     </div>
//   )

//   }

// https://api.chucknorris.io/jokes/random   you need the /jokes/random for it to work
// async functions, inside you create a variable called response. its storing response rom fetch request. 
// its a promise. we either use await or .then to handle our response. but async await is preferred / recommended to use as it s cleaner.
// response variable will now contain the fetch.
// then call handleFetch value to check if it works. Create a button with function


// when you read responce components inspect on browser. Status code is important
// HTTP STATUS CODES. 

// what we got in this response is info about request and response
// the bit we want is contained in body
// we cant read it yet,, 
// so you need to convert response into readable set of data
// so we create a new variable
// see below example
// then use the response.json() to get the data visible

// get request is the default. you can also use push, delete
// 
// i can use a hook state hook to store your data

//

import { useState } from 'react';

const App = () => {
  const [data, setData] = useState({})

  const handleFetch = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
    method: "GET",
  })
    const data = await response.json()
    setData(data)


  }

  return (
    <div className="App">
     <h1>Chuck Norris Quote Machine:</h1> 
     <h3>{data.value}</h3>
     {data.value ? <Quote data={data.value} /> : <p>Click the button to get your quote</p>}
     <button onClick={handleFetch}>click me</button>
    
    </div>
  )

  }

  const Quote = ({ data }) => <p>{data}</p>

// data.value will display on screen whatever you put there
// if it doesnt read it yet: add
// <h3> {data ? data.value : "click the button to get your quote"}</h3>
// check if data.value exist to try:
// // <h3> {data.value ? data.value : "click the button to get your quote"}</h3>
// you can swap what component is shown as well"
// // just <h3> data.value <h3> is not recommended as it could have errors. Check first if data exist with that ? : method.


export default App




// Fetch API = provides you with interface for fetching resources. you request a promise.
// if you re not careful, you can hit an api over 1000 a minute. SAFEST way is build a basic function for fetch request.