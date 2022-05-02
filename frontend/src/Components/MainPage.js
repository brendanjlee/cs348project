import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ApplicantService from '../services/applicant.service.js'
import './home.css';

const MainPage = () => {


    return (
        <div className="formContainer LoginPage">
            <div className="buttonContainer">
                <form>
                    <div>
                        <label>YOU MADE IT</label>
                    </div>
                    <div>
                        <input placeholder="Email" Style="margin-top: 0.5rem;"/>
                    </div>
                    <div className='LoginButtonWrapper'>
                        <Button className='LoginButton' type='submit'>NEW SIGN IN</Button>
                    </div>
                </form>
                <Link to="/CreateAcc" className="ButtonLink">New User?</Link>
            </div>
        </div>
    )
    
}

export default MainPage;