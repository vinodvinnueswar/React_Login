import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Login from './Login'
import Homepage from './Homepage'



function App() {
  // const [count, setCount] = useState(0)

  return (
<BrowserRouter>
<Routes>
  <Route path='/register' element={<Signup/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path="/home" element={<Homepage/>}></Route>
  

</Routes>
</BrowserRouter>

  )
}

export default App
