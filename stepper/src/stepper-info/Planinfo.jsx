import React from 'react'
import '../App'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../assets/styles/Planinfo.css'

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
                                            <p className='circle-personal-info ms-5'>2</p>
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
                        </div>
                        <div className='side-bar-info col-md-7  mt-5 '>
                            <h1 className='sidebar-h1'>Select Your plan</h1>
                            <p className='sidebar-h1-p'>You have the option of monthly of yearly billing.</p>
                            <div className='d-flex'>
                                <div className='col-md-4 col-sm-6 '>
                                    <div className='Arcade mx-2'>
                                        <p className='icon'></p>
                                        <b>Arcade</b>
                                        <p className='b'>$9/mo</p>
                                    </div>

                                </div>
                                <div className='col-md-4'>
                                    <div className='Arcade mx-2'>
                                        <p className='icon-1'></p>
                                        <b>Advanced</b>
                                        <p className='b'>$12/mo</p>

                                    </div>

                                </div>
                                <div className='col-md-4'>
                                    <div className='pro mx-2'>
                                        <p className='icon-2'></p>
                                        <b>Pro</b>
                                        <p className='b'>$15/mo</p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-12 col-md-4 col-sm-12'>
                            <div className='date-info mt-5 d-flex '>

                                <b className='date-b'>Monthly</b>
                                <label class="switch">
                                    <input type="checkbox"></input>
                                </label>
                                <label class="switch">
                                    <input type="checkbox"></input>
                                    <span class="slider round"></span>
                                </label>
                                <p className='yearly-p text-disabled'>Yearly</p>
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
