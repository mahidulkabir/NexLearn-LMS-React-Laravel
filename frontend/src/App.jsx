import { useState } from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/pages/Home'
import Courses from './components/pages/Courses'
import Details from './components/pages/Details'
import Login from './components/pages/Login'
import Register from './components/pages/Register';
import MyCourses from './components/pages/account/MyCourses';
import CoursesEnrolled from './components/pages/account/CoursesEnrolled'
import WatchCourse from './components/pages/account/WatchCourse';
import ChangePassword from './components/pages/account/ChangePassword';
// admin panel pages 
import AdminHome from './adminPanel/pages/AdminHome';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/account/login' element={<Login/>}/>
        <Route path='/account/register' element={<Register/>}/>
        <Route path='/account/my-courses' element={<MyCourses/>}/>
        <Route path='/account/courses-enrolled' element={<CoursesEnrolled/>}/>
        <Route path='/account/watch-course' element={<WatchCourse/>}/>
        <Route path='/account/change-Password' element={<ChangePassword/>}/>

        {/* admin pages here  */}

        <Route path='/admin/dashboard' element={<AdminHome/>}/>


     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
