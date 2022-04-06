import React from 'react'
import '../assets/css/Footer.css'
import {MdStreetview} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
        <div className="footer">
          <div className="details">
            <div className='phone'>
              <BsFillTelephoneFill/>
               <span>Schulz LLC
                    66 West Flagler Street
                    Suite 900
                    Miami, FL 33130
                </span>
              </div>
            <span className='street'>
              <MdStreetview/>
              <span>
                4079040530
              </span>
            </span>
          </div>
            <p className='law'> Schulz Financials is a financial technology company, not a bank. Banking Services are provided by Increase, through partnership with Blue Ridege Bank Member FDIC. Schulz Financials accounts are FDIC insured up to $250,000 per depositor through Blue Ridge Bank, Member FDIC.Invoicing and payroll provided by Clover Network, Inc.
                Application is subject to approval. No monthly or maintenance fees. Wire Transfer Fees may apply.
            </p>
            <p className='copy-right'> © 2022 Schulz LLC. All Rights Reserved. Schulz Financials is a trademark of Schulz LLC.</p>
        </div>
    </>
  )
}

export default Footer