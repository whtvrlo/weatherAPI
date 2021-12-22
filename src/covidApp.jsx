import React, { useState, useEffect } from "react"

import "./App.css"

const App = () => {
    const [covidData, setCovidData] = useState({})
    let country = "france"

  //   componentDidMount equivilant
  useEffect(() => {
    handleCovidFetch()
  }, [])



    const handleCovidFetch = async () => {
      const res = await fetch(`https://covid19-api.com/country?name=${country}&format=json`)
      const json = await res.json()
      setCovidData(json)
    }

  return (
    <div className="App">
      <h1>COVID DATA</h1>
      <button onClick={handleCovidFetch}>click</button>

    </div>
  )
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       data: "This is my super duper data",
//     }
//   }
//   //   state = {
//   //     data: "This is my super duper data",
//   //   }

//   componentDidMount() {
//     console.log("The component has finished mounting")
//     // this.setState({ data: "This is my NEW data" })
//   }

//   componentDidUpdate() {
//     console.log("the component just updated, woo!")
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello Lifecycle Methods</h1>
//         <p>{this.state.data}</p>
//       </div>
//     )
//   }
// }

export default App