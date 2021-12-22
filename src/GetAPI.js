
import "./App.css"
import { useState } from "react"

const App = () => {
  const [data, setData] = useState({})

  const handleFetch = async () => {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=Manchester&appid=${REACT_APP_API_KEY}&units=metric`, {
      method: "GET",
    })
    const data = await response.json()
    setData(data)
  }
  // https://api.chucknorris.io/jokes/random

  return (
    <div className="App">
      <h1>Chuck norris quote machine:</h1>
      {data.value ? <Quote data={data.value} /> : <p>Click the button to get your quote</p>}
      {/* <p>{data.value}</p> */}
      {console.log("Hi")}
      <button onClick={handleFetch}>Click me</button>
    </div>
  )
}

const Quote = ({ data }) => <p>{data}</p>

export default App



