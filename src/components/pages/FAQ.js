import React from 'react'
import Footer from '../Footer'

function FAQ() {
    return (
        <div className='faq'>
            <h1>FAQ</h1>
            <p>Who do you donate to?</p>
                <p>10% of all sales go directly to the Giraffe Conservation Foundation (https://giraffeconservation.org/)</p>
            <p>Is there an ambassador program available?</p>
                <p>Yes! Simply click on the link on teh navigation bar labeled "Ambassador" and fill out the form!</p>
            <p>How long will it take my order to devlier?</p>
                <p>Please allow at least 3-5 business days for your order to process and another 4-7 business days for your product to deliver.</p>
            <p>Where can I track my order?</p>
                <p>We have a link named "Track Your Order" on the bottom of our page or you can track directly at https://www.usps.com/</p>
            <p>What is your refund policy?</p>
                <p>Currently, we do not accept any returns or exchanges unless we, Amani Clothing Co., have caused an issue with your order.</p>
            <p>Do you ship internationally?</p>
                <p>Yes, we ship worldwide!</p>
            <p>More questions?</p>
                <p>Feel free to reach out to info@amaniclothingco.com regarding any other issues!</p>
            <Footer />
        </div>
    )
}

export default FAQ