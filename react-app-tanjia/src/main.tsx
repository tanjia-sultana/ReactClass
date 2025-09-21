import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import 'bootstape/dist/css/bootstrap.min.css'
// import 'bootstape/dist/js/bootstrap.bundle.js'
import App from './App.tsx'
import DemoClass from './ClassDemo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <DemoClass></DemoClass>
  </StrictMode>,
)
