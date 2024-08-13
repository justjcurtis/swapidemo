import { useState } from 'react'
import './App.css'
import AddButton from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          count is {count}
        </button>
        <p>
          <AddButton onClick={() => setCount((count) => count + 1)} />
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
