import React, { useState } from 'react';
import JobList from './JobList.js'
import ApplicantService from '../services/applicant.service.js'
import './home.css';

const MainPage = () => {

    const [skill, setSkill] = useState("")
    const [company, setCompany] = useState("")
    const [field, setField] = useState("")
    const [minExperience, setMinExperience] = useState("")

    return (
        <div>
            <div>
                ADD DROP DOWN CODE
            </div>

            <JobList/>
        </div>
    )
    
}

export default MainPage;