import { useState } from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Courses from './components/pages/Courses'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
