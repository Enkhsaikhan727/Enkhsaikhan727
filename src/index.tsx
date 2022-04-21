import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AlertProvider } from './context/AlertContext'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
ReactDOM.render(
  
  <React.StrictMode>
    <AlertProvider>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path="/:id" element={<App/>}/>
      </Routes>
      </BrowserRouter>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

