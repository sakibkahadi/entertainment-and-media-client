import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Routes/Router.jsx'
import AuthProvider from './Routes/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreatedRoute} />
    </AuthProvider>

  </React.StrictMode>,
)
