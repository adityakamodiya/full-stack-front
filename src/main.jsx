import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Edit from './Edit'

import AddStudent from './AddStudent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/add' element={<AddStudent />}></Route>
        <Route path='/editdata/:index' element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  </>
)
