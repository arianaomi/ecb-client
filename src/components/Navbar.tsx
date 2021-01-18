
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../ecb.png'

export default function Navbar () {
  return (
    <div className='navbar'>
      <img src={logo} className='logo' alt='log'/>
      <div className='wrapper-items'>
        <Link to='/' className='link'>
          <h2 className='item'>Carros en servicio</h2>
        </Link>
        <Link to='/form' className='link'>
          <h2 className='item'>Agregar carro</h2>
        </Link>
      </div>
    </div>
  )
}
