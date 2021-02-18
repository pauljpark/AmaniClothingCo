import React from 'react'

function Footer() {
    if (window.location.pathname === '/admin' || '/edit') return null
    return (
        <div className='footer'>
            <div>
                <p>Search</p>
                <p>Track Your Order</p>
                <p>Contact Us</p>
            </div>
            <div>
                <p>Instagram</p>
            </div>
            <div>
                <p>© 2020, Amani Clothing Co</p>
            </div>
        </div>
    )
}

export default Footer