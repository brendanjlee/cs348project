import React, { useState, useEffect } from 'react';
import {Link, renderMatches} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import JobPost from './JobPost.js'
import JobDataService from '../services/job.service'
import JoinedJobDataService from '../services/joinedJob.service.js';

const JobList = ({skill, company, field, minExperience}) => {
  const [listings, setListings] = useState([]); 

  console.log(skill, company, field, minExperience)


  const retrieveJobs = () => {
    //JobDataService.getAll()
    JoinedJobDataService.getAll()
    .then(response => {
      setListings(response.data);
      return response.data;
    })
  }

  const handleSkill = () => {
    
      JoinedJobDataService.getBySkill(skill)
      .then(response => {
          setListings(response.data)
          return response.data
      })
  }

  const handleCompany = () => {
      JoinedJobDataService.getByCompany(company)
      .then(response => {
          setListings(response.data)
          return response.data
      })
    // console.log(retrieveJobs());
  }

  const handleField = () => {
      JoinedJobDataService.getByField(field)
      .then(response => {
          setListings(response.data)
          return response.data
      })
  }

  const handleExperience = () => {
      minExperience = Number(minExperience)
      JoinedJobDataService.getByExperience(minExperience)
      .then(response => {
          setListings(response.data)
          return response.data
      })
  }

  useEffect(() => {
    //JobDataService.getAll()
    JoinedJobDataService.getAll()
    .then((response) => {
      setListings(response.data);
    //   return
    })
  }, [])


  return (
    <div>
      <div className='job-list'>
        <h2>Job Listings</h2>
        <div className="button-container">
            <Button type="submit" onClick={handleSkill}>Filter Selected Skill</Button>
            <Button type="submit" onClick={handleCompany}>Filter Selected Company</Button>
            <Button type="submit" onClick={handleField}>Filter Selected Field</Button>
            <Button type="submit" onClick={handleExperience}>Filter Selected Experience</Button>
        </div>
        <ul className='list-group'>
            {listings.map((i, index) => (
                <JobPost data={listings[index]} key={index}/>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default JobList;