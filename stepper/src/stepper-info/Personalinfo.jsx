import React from 'react'
import '../App'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../assets/styles/Personalinfo.css'

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
                                        <p className='circle ms-5'>1</p>
                                        <p className='ms-3 text-white personal-step text-lighter'>STEP 1</p>
                                        <div className='mt-3'>
                                            <p className='info-yours text-white'>YOUR INFO</p>
                                        </div>
                                    </div>
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
                                        <p className='circle-2 ms-5'>4</p>
                                        <p className='ms-3 text-white personal-step text-lighter'>STEP 4</p>
                                        <div className='mt-3'>
                                            <p className='info-yours text-white'>SUMMARY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='side-bar col-md-7  mt-5'>
                        <h1 className='sidebar-h1'>Personal info</h1>
                        <p>Please provide your name,email-address and phone number. </p>
                            <Form>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Bikash Ghimire" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="password" placeholder="hello@123" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                              <div className='d-flex justify-content-between'>
                              <Form.Label>Phone Number</Form.Label>
                              <span className='text-danger span-details'>The field is required</span>
                              </div>
                                <Form.Control type="password" placeholder="e.g. +1234" className='border-danger' />
                              </Form.Group>
                              <div className='d-flex justify-content-end mt-5'>
                              <button className='btn-next-step '>Next Step</button>
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
