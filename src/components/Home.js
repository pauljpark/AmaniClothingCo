import React from 'react'
import Description from './Description'
import CollectionList from './CollectionList'
import Subscribe from './Subscribe'
import Nav from './Nav'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className='nav-container'>
                <p className='shipping-tag'>free shipping for orders $75 or more</p>
                    <Nav />
                <Link to='/shop' style={{ textDecoration: 'none', color: '#D78DA9' }}>
                    <button className='shop-btn'>Shop now →</button>
                </Link>
            </div>
                <Description />
                <CollectionList />
                <Subscribe />
        </div>
    )
}

export default Home