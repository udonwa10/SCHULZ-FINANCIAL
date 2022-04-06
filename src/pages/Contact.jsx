import React from 'react'
import '../assets/css/Contact.css'

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <form action="" className='contact-form'>
                <div className="first_name input">
                    <input type="text" placeholder='First Name'/>
                </div>

                <div className="last_name input">
                    <input type="text" placeholder='Last name' />
                </div>

                <div className="name_of_law_firm input">
                    <input type="text"  placeholder='Number of law firms'/>
                </div>

                <div className="address input">
                    <input type="text" placeholder='Address'/>
                </div>

                <div className="number_of_partners input">
                    <input type="number" placeholder='number of partner'/>
                </div>

                <div className="email_address input">
                    <input type="email" placeholder='email'required/>
                </div>f2

                <div className="phone input">
                    <input type='tel' placeholder='phone number'/>
                </div>

                <div className="agreement">
                    <input type='checkbox'/>
                    <p>
                    I agree to <span>Schulz Financials</span>  registration terms and privacy policy
                    </p>
                </div>

                <div className="submit">
                    <button type='submit'>submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact