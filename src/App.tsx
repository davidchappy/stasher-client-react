import logo from "./logo.svg"
import "./App.css"
import { useQuery } from "@apollo/client"
import { GOODIES_QUERY } from "./graphql/query"

type Goodie = {
  id: number
  link: string
}

function App() {
  const { data, loading, error } = useQuery(GOODIES_QUERY)

  console.log({ data, loading, error })

  if (error) return <p>Error : {error.message}</p>

  if (loading) return <p>Loading...</p>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {data?.goodies ? (
          <ul>
            {data.goodies.map((goodie: Goodie) => (
              <li key={goodie.id}>{goodie.link}</li>
            ))}
          </ul>
        ) : null}
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
