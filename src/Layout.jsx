import React from 'react'
import { Link,Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <header>
          <Link to="/" style={{ marginRight: '10px'}} >Home</Link>
          <Link to="/about" style={{marginRight: '10px'}} >About</Link>
          <Link to="/footer" >Footer</Link>
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