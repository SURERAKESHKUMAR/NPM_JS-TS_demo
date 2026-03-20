import { useMemo, useState } from 'react'
import './App.css'
import { greet } from '@mahendar8121/njm-utils'
import {APP_NAME} from '@mahendar8121/commonjs-package'

function App() {
  const [count, setCount] = useState(0)
   const message = useMemo(() => greet('Mahendar'), []);
  // const mail = useMemo(() => isValidEmail('mahendar@example.com'), []);
   const appname = useMemo(() => APP_NAME, []);
  return (
    <>
      <div>
         <h1>{message}</h1>
         <h1>{appname}</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
