import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import BlogContextProvider from '../context/blogContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogContextProvider>
      <App/>
    </BlogContextProvider>
  </React.StrictMode>,
)
