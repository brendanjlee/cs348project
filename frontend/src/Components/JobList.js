import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import JobPost from './JobPost.js'
import ApplicantService from '../services/applicant.service.js'
import './home.css';

const JobList = () => {

    // API Call to get the Job Posting list
    // Data comes in as an array
    // For Each item in the array, Pass each field to the JobPost component and display the component
    // Fields

    return(
        <JobPost />
    )
}

export default JobList;