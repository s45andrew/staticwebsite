import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './page1.html'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Frantic Stats</h1>
        <a href="https://vite.dev" target="_blank">
        
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h2>data analytics</h2>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <p>iframe here</p>
      <iframe src="page1.html" width="600" height="400" title="Page 1"></iframe>

         
    </>
           
  )
}

export default App
