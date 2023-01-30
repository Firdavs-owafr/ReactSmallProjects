import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Notfound } from './components/Notfound';
import { Layout } from './Layout';

export default function App() {
  return (
    <>
      
      <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route index element={ <Header/> } />
            <Route path='about' element={ <About/> } />
            <Route path='footer' element={ <Footer/> } />
            <Route path='*' element={ <Notfound/> } />
          </Route>
      </Routes>
    </>
  )
}
