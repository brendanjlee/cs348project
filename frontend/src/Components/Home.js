import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './home.css';

const Home = () => {

    return (
        <div className="formContainer LoginPage">
            <div className="buttonContainer">
                <form>
                    <div>
                        <label>Sign In:</label>
                    </div>
                    <div>
                        <input placeholder="Email" Style="margin-top: 0.5rem;"/>
                    </div>
                    <div className='LoginButtonWrapper'>
                        <Button className='LoginButton' type='submit'>Sign In</Button>
                    </div>
                </form>
                <Link to="/CreateAcc" className="ButtonLink">New User?</Link>
            </div>
        </div>
    )
    
}

export default Home;