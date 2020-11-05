import React from 'react'
import ambassador from '../../img/ambassador.png'
import Nav from '../Nav'

function Ambassador() {

    const onFormSubmit = (e) => {
        e.preventDefault()
    }

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
                    <form onSubmit={onFormSubmit}>
                        Name <input 
                                placeholder='First'
                                value=''
                                type='text'
                              />
                              <input 
                                placeholder='Last'
                                value=''  
                                type='text'
                              />
                              <br />
                        Email <input 
                                value=''
                                type='text'
                              />
                              <br />
                        Birth Date(MMDDYYYY)  <input 
                                                    value=''
                                                    type='number'
                                                />
                                <br />
                        Please tell us why you would like to join the team!
                            <input 
                                value=''
                                type='text'
                            />
                                <br />
                                    <button>Submit</button>
                    </form>
        </div>
    )
}

export default Ambassador