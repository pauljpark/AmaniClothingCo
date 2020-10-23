import React from 'react'
import main from '../img/main.png'
import Description from './Description'
import CollectionList from './CollectionList'
import Subscribe from './Subscribe'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <img src={main} alt='main here' className='main-pic' />
            <Description />
            <CollectionList />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Home