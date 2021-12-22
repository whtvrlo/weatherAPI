import React, { useState, useEffect } from "react"
import "./App.css"


const App = () => {
    const [data, setData] = useState({})
const [userInput, setUserInput] = useState("")

    // useEffect(() => {
    //   handleFetch()
    // }, [])
    
  
    const updateInput = (event) =>{
      setUserInput(event.target.value)

    }

    const handleFetch = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=c6c21e132f5c89a6375f15d47109b7bd&units=metric`, {
        method: "GET",
      })
      const data = await response.json()
      setData(data)
      console.log(response)
      console.log(data)
    }
    // https://api.chucknorris.io/jokes/random
  
    return (
      <div className="App">
        <h1>WEATHER:</h1>
        <h3>{userInput}</h3>
        <button onClick={handleFetch}>Enter</button>
        
      
       
        <div>
        <input onChange={updateInput} value={userInput} /></div>
        <h2>{userInput}</h2>
        {data.main ? <Quote data={data} /> : <p>{}</p>}
    
        
    
    
      </div>
    )
  }

  // const TextInput = (props, updateInput) => {
  //   return (
  //     <div><input updateInput = {updateInput} onChange={updateInput} placeholder="Type City Location"></input></div>
  //   )


  // }
  
  // location: set {data.name} = userInput     setData(userInput)
  const Quote = ({ data }) => <div>
    <p>Location: {data.name}</p> 
    <p>Temperature {data.main.temp}	°C</p>
    <p>Description:{data.weather.description}</p>
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
