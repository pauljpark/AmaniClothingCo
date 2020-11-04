import React from 'react'
import hoodies from '../img/hoodies.png'
import longsleeves from '../img/longsleeves.png'

function CollectionList(props) {
    return (
        <div className='collection-list'>
            <h2>Collection List</h2>
            <hr />
            {/*<span>{props.whatever}</span>*/}
                <div className='collections'>
                    <img src={hoodies} alt='hoodies here' className='collections-imgs' />
                    <img src={longsleeves} alt='longsleeves here' className='collections-imgs' />
                </div>
        </div>
    )
}

export default CollectionList