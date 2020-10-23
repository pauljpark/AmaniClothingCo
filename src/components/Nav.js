import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav className='nav-bar'>
          <h3>Amani Clothing Co Logo</h3>
            <ul className='nav-list'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/ambassador'>
                    <li>Ambassador</li>
                </Link>
                <Link to='/faq'>
                    <li>FAQ</li>
                </Link>
                <Link to='/cart'>
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav