import React from 'react'
import {GiPoliceOfficerHead} from 'react-icons/gi'
import {GiPlatform} from 'react-icons/gi'
import {GiReceiveMoney} from 'react-icons/gi'
import '../assets/css/BusinessBanking.css'
const BusinessBanking = () => {
  return (
    <>
        <div className="business_banking">
            <div className="business_banking_header">
                <h1>Your one-stop for business banking</h1>
            </div>
            {/* cards */}
            <div className="business_banking_cards">
                <div className="Comprehensive card">
                    <div className="icon"><GiPlatform size={80} color={'#196fe0'}/></div>
                    <div className="card-head">
                        <h4>Comprehensive Platform</h4></div>
                    <div className="card-body">
                        <p>Manage cash flow and expenses, invoices, contracts, expenses and payroll at the wave of a hand.</p>
                    </div>
                </div>

                <div className="dedicated_account card">
                    <div className="icon "><GiPoliceOfficerHead size={80} color={'#196fe0'}/></div>
                    <div className="card-head"><h4>A Dedicated Account Officer </h4></div>
                    <div className="card-body">
                        <p>Once approved and onboarded, each law firm is assigned a trained accountant who would oversee and manage the books of the firm.</p>
                    </div>
                </div>

                <div className="Equity card">
                    <div className="icon"><GiReceiveMoney size={80} color={'#196fe0'}/></div>
                    <div className="card-head"><h4>One Who Seeks Equity Must Do Equity</h4></div>
                    <div className="card-body">
                        <p>
                          Benefit from our bespoke monthly fees. No additional charges and interests.   
                         </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BusinessBanking