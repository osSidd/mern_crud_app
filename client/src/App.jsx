import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "../pages/home/home"
import SpecificBlog from "../pages/specific/specificBlog"
import CreateBlog from '../pages/createBlog/createBlog'
import EditBlog from '../pages/editBlog/editBlog'
import Navbar from '../components/navbar/navbar'
import ErrorPage from '../pages/errorPage'

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<SpecificBlog/>}/>
          <Route path="/create" element={<CreateBlog/>}/>
          <Route path="/edit/:id" element={<EditBlog/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
