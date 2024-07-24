import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { tasksPage } from './pages/tasksPage';
import { taskFromPage } from './pages/taskFormPage';
import {Navigation} from './components/Navigation'

import React from "react"

function App(){
  return(
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path="/" element={<Navigate to="/tasks"/>}/>
    <Route path="/tasks" element={<tasksPage/>}/>
    <Route path="/tasks-create" element={<taskFromPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App