import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    if (window.location.href === 'http://localhost:3000/') {
        return (
            <nav className='nav-bar'>
                <Link to='/' style={{ letterSpacing: '1px', fontSize: '24px', textDecoration: 'none', color: '#ffffff'}}>
                    <h3>Amani Clothing Co Logo</h3>
                </Link>
            <ul className='nav-list'>
                <Link to='/' style={{ 
                                letterSpacing: '1px', 
                                fontWeight: 'bold', 
                                textDecoration: 'none', 
                                color: '#ffffff' 
                            }}>
                    <li className='nav-link'>Home</li>
                </Link>
                <Link to='/about' style={{ 
                                    letterSpacing: '1px', 
                                    fontWeight: 'bold', 
                                    textDecoration: 'none', 
                                    color: '#ffffff' 
                                }}>
                    <li className='nav-link'>About Us</li>
                </Link>
                <Link to='/shop' style={{ 
                                    letterSpacing: '1px', 
                                    fontWeight: 'bold', 
                                    textDecoration: 'none', 
                                    color: '#ffffff' 
                                }}>
                    <li className='nav-link'>Shop</li>
                </Link>
                <Link to='/ambassador'style={{ 
                                        letterSpacing: '1px', 
                                        fontWeight: 'bold', 
                                        textDecoration: 'none', 
                                        color: '#ffffff' 
                                    }}>
                    <li className='nav-link'>Ambassador</li>
                </Link>
                <Link to='/faq' style={{ 
                                letterSpacing: '1px', 
                                fontWeight: 'bold', 
                                textDecoration: 'none', 
                                color: '#ffffff' 
                            }}>
                    <li className='nav-link'>FAQ</li>
                </Link>
                <Link to='/cart' style={{ 
                                    letterSpacing: '1px', 
                                    fontWeight: 'bold', 
                                    textDecoration: 'none', 
                                    color: '#ffffff' 
                                }}>
                    <li className='nav-link'>Cart</li>
                </Link>
            </ul>
        </nav>
        )
    } else {
      return (
        <nav className='nav-bar'>
                <Link to='/' style={{ 
                                fontSize: '24px', 
                                textDecoration: 'none', 
                                color: '#D78DA9'
                            }}>
                    <h3>Amani Clothing Co Logo</h3>
                </Link>
            <ul className='nav-list'>
                <Link to='/' style={{ 
                                fontWeight: 'bold', 
                                textDecoration: 'none', 
                                color: '#D78DA9' 
                            }}>
                    <li className='nav-link'>Home</li>
                </Link>
                <Link to='/about' style={{ 
                                    fontWeight: 'bold', 
                                    textDecoration: 'none', 
                                    color: '#D78DA9' 
                                }}>
                    <li className='nav-link'>About Us</li>
                </Link>
                <Link to='/shop' style={{ 
                                    fontWeight: 'bold', 
                                    textDecoration: 'none', 
                                    color: '#D78DA9' 
                                }}>
                    <li className='nav-link'>Shop</li>
                </Link>
                <Link to='/ambassador' style={{ 
                                        fontWeight: 'bold', 
                                        textDecoration: 'none', 
                                        color: '#D78DA9' 
                                    }}>
                    <li className='nav-link'>Ambassador</li>
                </Link>
                <Link to='/faq' style={{ 
                                fontWeight: 'bold', 
                                textDecoration: 'none', 
                                color: '#D78DA9' 
                            }}>
                    <li className='nav-link'>FAQ</li>
                </Link>
                <Link to='/cart' style={{ 
                                    fontWeight: 'bold', 
                                    textDecoration: 'none', 
                                    color: '#D78DA9' 
                                }}>
                    <li className='nav-link'>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}
}

export default Nav