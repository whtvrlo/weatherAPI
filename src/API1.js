import React, { useState, useEffect } from "react"
import './API1.css'
import './index.js'


const App = () => {
    const [data, setData] = useState({})
    const [userInput, setUserInput] = useState("")
    const [error, setError] = useState(true)
    const [screen, setScreen] = useState("")


    // useEffect(() => {
    //   handleFetch()
    // }, [])
    
  
    const updateInput = (event) =>{
      setUserInput(event.target.value)

    }

  const clearScreen = () => {
  setUserInput("")
    }


    const handleFetch = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=c6c21e132f5c89a6375f15d47109b7bd&units=metric`, {
        method: "GET",
    
      })
      const city = await response.json()
      setData(city)
      setUserInput(userInput) // update/ set setUserInput to userinput
      console.log(response)
      console.log(city)
      setUserInput("")
      if (city.length <= 0) {
        return 
      }
    }


  
    return (
      <div className="App">
        <div className="wrapperMain">
          <h1>WEATHER</h1>

          <div>
          <input placeholder="Type name of city" type="text" onChange={updateInput} value={userInput} /></div>
          <button onClick={handleFetch}>Enter</button>
          <h2 className="UI">{userInput}</h2>
          <h2>{data.name}</h2>
          {data.main || data.weather ? <Quote data={data} /> : <p></p>}
        </div>

      </div>
    )

}
  
  // const TextInput = (props, updateInput) => {
  //   return (
  //     <div><input updateInput = {updateInput} onChange={updateInput} placeholder="Type City Location"></input></div>
  //   )


  // }
  
  // location: set {data.name} = userInput     setData(userInput)
  const Quote = ({ data }) => <div className="wrapper">
    <div className="quoteBox">
      <p className="bold">Temperature </p>
        <p>{data.main.temp}	°</p>
      <p className="bold">Humidity: {data.main.humidity} %</p>
      <p>{data.main.humidity}"%"</p>
      <p className="bold">Description:</p>
      <p>{data.weather[0].description} </p>
      </div>
    </div>


export default App


// //______

// const App = () => {
//   const [data, setData] = useState({})


//   //   componentDidMount equivilant
//   useEffect(() => {
//     handleFetch()
//   }, [])

  

//   const handleFetch = async () => {
//     const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=Manchester&appid=c6c21e132f5c89a6375f15d47109b7bd&units=metric`)
//     const responseData = await response.json()
//     setData(responseData)
//   }

//   return (
//     <div className="App">
//       <h1>Open Weather Map</h1>
//       {/* <button onClick={handleFetch}>click</button> */}

//       <ol>
//         {data.results &&
//           data.results.map((data, index) => {
//             return (
//               <li key={index}>
//                 <h4>{data.value}</h4>
//               </li>
//             )
//           })}
//       </ol>
//     </div>
//   )
// }

// // class App extends React.Component {
// //   constructor() {
// //     super()
// //     this.state = {
// //       data: "This is my super duper data",
// //     }
// //   }
// //   //   state = {
// //   //     data: "This is my super duper data",
// //   //   }

// //   componentDidMount() {
// //     console.log("The component has finished mounting")
// //     // this.setState({ data: "This is my NEW data" })
// //   }

// //   componentDidUpdate() {
// //     console.log("the component just updated, woo!")
// //   }

// //   render() {
// //     return (
// //       <div className="App">
// //         <h1>Hello Lifecycle Methods</h1>
// //         <p>{this.state.data}</p>
// //       </div>
// //     )
// //   }
// // }


// // notes: 
// // first parameter after ? 
// // added in a key value pair separated by an = sign
// // every subsequent parameter gets added after &
// // 
// // order of parameters doesnt matter
// // https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid={REACT_APP_API_KEY}&units=metric
// // https://api.openweathermap.org/data/2.5/weather?q=Manchester&units=metric&appid={REACT_APP_API_KEY}
// // would both work

// // app id : appid stands for app id, and is usually the api key

// // 
