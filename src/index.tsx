import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AlertProvider } from './context/AlertContext'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AppChallenge from './Appchallenge'
ReactDOM.render(
  
  <React.StrictMode>
    <AlertProvider>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path="/:session" element={<AppChallenge/>}/>
      </Routes>
      </BrowserRouter>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

