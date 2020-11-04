import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav className='nav-bar'>
          <h3>Amani Clothing Co Logo</h3>
            <ul className='nav-list'>
                <Link to='/' style={{ textDecoration: 'none', color: '#D78DA9' }}>
                    <li className='nav-link'>Home</li>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none', color: '#D78DA9' }}>
                    <li className='nav-link'>About Us</li>
                </Link>
                <Link to='/shop' style={{ textDecoration: 'none', color: '#D78DA9' }}>
                    <li className='nav-link'>Shop</li>
                </Link>
                <Link to='/ambassador'style={{ textDecoration: 'none', color: '#D78DA9' }}>
                    <li className='nav-link'>Ambassador</li>
                </Link>
                <Link to='/faq'style={{ textDecoration: 'none', color: '#D78DA9' }}>
                    <li className='nav-link'>FAQ</li>
                </Link>
                <Link to='/cart'style={{ textDecoration: 'none', color: '#D78DA9' }}>
                    <li className='nav-link'>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav