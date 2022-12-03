import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"

function App() {
  const [serverData, setServerData] = useState(null)

  const fetchServerData = () => {
    fetch(process.env.REACT_APP_API_HOST)
      .then(response => response.json())
      .then(data => setServerData(data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {serverData ? (
          <p>{serverData.test}</p>
        ) : (
          <button onClick={fetchServerData}>Get server data.</button>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
