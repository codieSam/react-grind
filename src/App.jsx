import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AuthCard from './components/AuthCard'
import AuthCardTwo from './components/AuthCardTwo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-center text-2xl text-red-800 mt-4">ShowOnClick</div>
      {/* <AuthCard /> */}
      <AuthCardTwo />
    </>
  )
}

export default App
