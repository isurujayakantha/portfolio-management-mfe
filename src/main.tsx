import React from 'react'
import ReactDOM from 'react-dom/client' 
import './assets/css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PortfolioSummary from './pages/PortfolioSummary'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<PortfolioSummary/>}> </Route>
        <Route path="/notFound" element={<NotFound/>}> 
        </Route>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
