import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'antd-mobile/es/global'
import 'normalize.css'
import '@/assets/styles/base.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
