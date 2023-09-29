import React from 'react'
import '../App'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../assets/styles/Finish.css'

import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.css';

import bgsidebar from '../assets/image/bg-sidebar.svg'

const Personalinfo = () => {
    return (
        <div className='bg-infos'>
            <div className='outline-border-info '>
                <Container>
                    <Row>
                        <div className='aside-bar col-md-5'>
                            <div className=' img-sidebar d-flex'>
                                <div className='img-sidebar-left-side'>
                                    <div className='d-flex'>
                                        <p className='circle-1 ms-5'>1</p>
                                        <p className='ms-3 text-white personal-step text-lighter'>STEP 1</p>
                                        <div className='mt-3'>
                                            <p className='info-yours text-white'>YOUR INFO</p>
                                        </div>
                                    </div>
                                    <div className='div-media'>
                                        <div className='d-flex mt-3'>
                                            <p className='circle-2 ms-5'>2</p>
                                            <p className='ms-3 text-white personal-step text-lighter'>STEP 2</p>
                                            <div className='mt-3'>
                                                <p className='info-yours text-white'>SELECT PLAN</p>
                                            </div>
                                        </div>
                                        <div className='d-flex mt-3'>
                                            <p className='circle-2 ms-5'>3</p>
                                            <p className='ms-3 text-white personal-step text-lighter'>STEP 3</p>
                                            <div className='mt-3'>
                                                <p className='info-yours text-white'>ADD-ONS</p>
                                            </div>
                                        </div>
                                        <div className='d-flex mt-3'>
                                            <p className='circle-4 ms-5'>4</p>
                                            <p className='ms-3 text-white personal-step text-lighter'>STEP 4</p>
                                            <div className='mt-3'>
                                                <p className='info-yours text-white'>SUMMARY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 
                        <div className='col-md-7'>
                        <div className='right-bar mt-4'>
                            <h1 className='right-bar-h1'>Finishing up</h1>
                            <p className='sidebar-text text-muted'>Double-check everything looks ok before conforming.</p>
                            <div className="monthly-box">
                                <div className='arcade-section with-border d-flex justify-content-between'>
                                    <div className="arcade">Arcade(monthly)
                                        <p className='arcade-text'>Change</p>
                                    </div>
                                    <div className="amount mt-2">$9/mo</div>
                                </div>
                                <div className='service-storage-section d-flex justify-content-between'>
                                    <div className="service-storage mt-3">Online service
                                    </div>
                                    <div className="amount mt-3">+$1/mo
                                    </div>
                                </div>
            
                                <div className='service-storage-section d-flex justify-content-between'>
                                    <div className="service-storage mt-3">Larger storage
                                    </div>
                                    <div className="amount mt-3">+$2/mo
                                    </div>
                                </div>
                            </div>
                            <div className="total-section d-flex justify-content-between mt-4">
                                <div className='total '>
                                    Total(per month)
                                </div>
                                <div className='final-amount'>+$12/mo
                                </div>
            
                            </div>
                            <div className='last-section d-flex justify-content-between'>
                                <div className='go-back'>Go Back
                                </div>
                                <div className='confirm-btn '>
                                    <button className='btn-confirm ms-3'>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>                           
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Personalinfo
