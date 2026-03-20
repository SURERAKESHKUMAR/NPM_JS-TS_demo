import { useMemo, useState } from 'react'
import './App.css'
import { greet } from '@mahendar8121/njm-utils'

function App() {
  const [count, setCount] = useState(0)
   const message = useMemo(() => greet('Mahendar'), []);
  return (
    <>
      <div>
         <h1>{message}</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
