import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

      <div class='aParent'>
        <div id="pictures" class="column half">
            <div id="window">
                <div class="window-buttons">
                    <button onclick="openNewPage('page1.html', '#2B0001')">Shares</button>
                    <button onclick="openNewPage('page2.html', '#001E00')">News</button>
                    <button onclick="openNewPage('page3.html', '#000328')">Sports</button>
                    <button onclick="openNewPage('page4.html', '#6A4900')"> ToDo </button>
                </div>
                <div id="inner-window">
                    <iframe id="inner-iframe" src=""></iframe>
                </div>
            </div>
        </div>
        </div>
    </>
           
  )
}

export default App
