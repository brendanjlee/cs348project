import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ApplicantService from '../services/applicant.service.js'
import './home.css';

const Home = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    let navigate = useNavigate()
    

    const handleSignIn = () => {
        ApplicantService.get(email)
        .then (response => {
            console.log(response)
            if (response.data.email === email) {
                console.log(response.data.email)
                navigate("/mainPage")
            }
        }).then (setMessage("Username not found."))
    }

    return (
        <div className="formContainer LoginPage">
            <div className="buttonContainer">
                <form>
                    <div>
                        <label>Sign In:</label>
                    </div>
                    <div>
                        <input placeholder="Email" Style="margin-top: 0.5rem;" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className='LoginButtonWrapper'>
                        <Button className='LoginButton' onClick={handleSignIn}>Sign In</Button>
                        <Link to="/CreateAcc" className="ButtonLink">New User?</Link>
                    </div>
                </form>
                
                <h3>{message}</h3>
            </div>
        </div>
    )
    
}

export default Home;