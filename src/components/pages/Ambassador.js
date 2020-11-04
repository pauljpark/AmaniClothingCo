import React from 'react'
import ambassador from '../../img/ambassador.png'
import Nav from '../Nav'

function Ambassador() {
    return (
        <div>
            <Nav />
                <div className='ambassador'>
                    <h1>Join Our Team!</h1>
                        <hr />
                            <img 
                                className= 'ambassador-pic' 
                                src={ambassador} 
                                alt="ambassador"/>
                    </div>
        </div>
    )
}

export default Ambassador