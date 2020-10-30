import React from 'react'
import ambassador from '../../img/ambassador.png'
import Footer from '../Footer'

function Ambassador() {
    return (
        <div className='ambassador'>
            <h1>Join Our Team!</h1>
            <img src={ambassador} alt="ambassador" />
            <Footer />
        </div>
    )
}

export default Ambassador