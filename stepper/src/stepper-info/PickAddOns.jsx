import React from 'react'
import '../App'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../assets/styles/PickAddOns.css'

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
                                            <p className='circle-3 ms-5'>3</p>
                                            <p className='ms-3 text-white personal-step text-lighter'>STEP 3</p>
                                            <div className='mt-3'>
                                                <p className='info-yours text-white'>ADD-ONS</p>
                                            </div>
                                        </div>
                                        <div className='d-flex mt-3'>
                                            <p className='circle-2 ms-5'>4</p>
                                            <p className='ms-3 text-white personal-step text-lighter'>STEP 4</p>
                                            <div className='mt-3'>
                                                <p className='info-yours text-white'>SUMMARY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='side-bar col-md-7  mt-5'>
                            <h1 className='sidebar-h1'>Pick add-ons</h1>
                            <p className='sidebar-h1-p'>Add-ons help enhance your gaming experience . </p>
                            <Form>
                                  <div className='text-area d-flex my-3'>
                                  <input type='checkbox' className='ms-4 mt-2 checkbox'></input>
                                  <div className=''>
                                  <h6 className='mt-4 ms-4 service-ons'>Online service</h6>
                                  <p className='ms-4 mb-5 games-info'>Access to multiplayer games</p>
                                  </div>
                                  <p className='ms-5 end-dollar'>+$1/mo</p>
                                  </div>
                                  <div className='text-area d-flex my-3'>
                                  <input type='checkbox' className='ms-4 mt-2 checkbox'></input>
                                  <div className=''>
                                  <h6 className='mt-4 ms-4 service-ons'>Larger Storage</h6>
                                  <p className='ms-4 mb-5 games-info'>Extra 1TB cloud save</p>
                                  </div>
                                  <p className='mx-4 end-dollar ms-4'>+$2/mo</p>
                                  </div>
                                  <div className='text-area d-flex my-3'>
                                  <input type='checkbox' className='ms-4 mt-2 checkbox'></input>
                                  <div className=''>
                                  <h6 className='mt-4 ms-4 service-ons'>Customizable Profile</h6>
                                  <p className='ms-4 mb-5 games-info'>Customize theme on your profile</p>
                                  </div>
                                  <p className='mx-4 end-dollar'>+$1/mo</p>
                                  </div>
                                  <div d-flex justify-content-start>
                                  <p className='p-add-ons'>Go Back</p>
                                  </div>
                                  <div className='d-flex justify-content-end '>
                                    <button className='btn-next-step-add'>Next Step</button>
                                </div>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Personalinfo
