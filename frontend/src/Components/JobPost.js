import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from 'react-router'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ApplicantService from '../services/applicant.service.js'
import './home.css';



class JobPost extends Component {
    // constructor(props) {
    //     super(props)

    // }

    handleDescription() {

    }
    
    render() {
        let date = this.props.data.date_posted.substring(0,10)
        console.log(this.props.data)
        
        return(
            <div className="job-item">
                <h6 className="job-number">{this.props.data.job_id - 1}.</h6>
                <div className="job-info">
                    <div className="job-info-detail">
                        <div className="title">Job Title:</div>
                        <div>{this.props.data.job_title}</div>
                    </div>
                    <div className="job-info-detail">
                        <div className="title">Field:</div>
                        <div>{this.field}</div>
                    </div>
                    <div className="job-info-detail">
                        <div className="title">Company Name:</div>
                        <div>{this.props.data.company_id}</div> 
                    </div>
                    <div className="job-info-detail">
                        <div className="title">Skill:</div>
                        <div>{this.props.data.skill_req}</div>
                    </div>
                    <div className="job-info-detail">
                        <div className="title">Min Experience:</div>
                        <div>{this.props.data.min_experience} Years</div>
                    </div>
                    <div className="job-info-detail">
                        <div className="title">Status:</div>
                        <div>{this.props.data.is_active}</div>
                    </div>
                    <div className="job-info-detail">
                        <div className="title">Date Posted:</div>
                        <div>{date}</div>
                    </div>
                    <div className="job-info-detail">
                        <div className="title">Total Applicants:</div>
                        <div>{this.props.data.num_applicants}</div>
                    </div>
                    <div className="job-info-detail">
                        <div className="title">Description:</div>
                        <div>{this.props.data.job_desc}</div>
                    </div>
                </div>
                <Button className='LoginButton apply'>Apply!</Button>
            </div>
        );
    };
}

export default JobPost;