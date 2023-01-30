import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Notfound } from './components/Notfound';
import { Single } from './Single';
import { Editpost } from './Editpost';
import { Create } from './Create';
import { Layout } from './Layout';

export default function App() {
  return (
    <>
      
      <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route index element={ <Header/> } />
            <Route path='about' element={ <About/> } />
            <Route path='about/:id' element={ <Single/> } />
            <Route path='about/:id/edit' element={ <Editpost/> } />
            <Route path='about/new' element={ <Create/> } />
            <Route path='footer' element={ <Footer/> } />
            <Route path='*' element={ <Notfound/> } />
          </Route>
      </Routes>
    </>
  )
}
