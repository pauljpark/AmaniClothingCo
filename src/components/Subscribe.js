import React from 'react'

function Subscribe() {

    const submitEmail = (e) => {
        e.preventDefault()
    }

    return (
        <div className='subscribe'>
            <div>
            <h2>Subscribe to us!</h2>
                <p>Stay in the loop with the latest releases and discount codes</p>
                    <hr />
                    </div>
                    <form onSubmit={submitEmail}>
                        <input type='text' placeholder='Your email' />
                        <button className='sub-btn'>Subscribe</button>
                    </form>
        </div>
    )
}

export default Subscribe