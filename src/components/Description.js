import React from 'react'
import giraffe from '../img/giraffe.png'

function Description() {
    return (
    <div className='description'>
        <img src={giraffe} alt='giraffe here' className='giraffe-pic' />
            <div className='giraffe-text'>
                <h2>#FreetheGentleGiants</h2>
                <p>"With a decline of almost 40 percent in the last three decades alone, the world’s tallest animal is under severe pressure in some of its core ranges across East, Central and West Africa. As one of the world’s most iconic animals, it is timely that we stick our neck out for the giraffe before it is too late." - Julian Fennessy, co-chair of the Giraffe and Okapi Specialist Group</p>
            </div>
    </div>
    )
}

export default Description