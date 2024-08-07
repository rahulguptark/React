import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// createRoot creates a dom and then compare the main dom and dom created by iteself and update only those things which are updated in UI. But the browser removes the whole dom and then updates the whole dom again, this process is called page reload.


// To study about react fiber and reconciliation refer this:-

// https://github.com/acdlite/react-fiber-architecture