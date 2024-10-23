
import './App.css'
import Contact from './Components/Contact'
import Event from './Components/Event'
import Home from './Components/Home'
import { Routes,Route } from 'react-router-dom'
import Project from './Components/Project'
import Album from './Components/Album'
import Organisation from './Components/Organization'
import Task from './Components/Task'
function App() {
 
  return (
    <>
     {/* <Home/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/album' element={<Album/>}/>
      <Route path='/organisation' element={<Organisation/>}/>
      <Route path='/task' element={<Task/>}/>
   


     </Routes>
     
    </>
  )
}

export default App
