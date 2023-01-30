import React from 'react'
import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

const Layout = () => {
  return (
    <>
        <header>
          <CustomLink to="/" style={{ marginRight: '10px'}}>Home</CustomLink>
          <CustomLink to="/about" style={{marginRight: '10px'}} >About</CustomLink>
          <CustomLink to="/footer">Footer</CustomLink>
        </header>

    <main>
      <Outlet/>
    </main>

      <footer>
        2023
      </footer>
    </>
  )
}

export {Layout};