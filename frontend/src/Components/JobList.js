import React, { useState, useEffect } from 'react';
import {Link, renderMatches} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import JobPost from './JobPost.js'
import JobDataService from '../services/job.service'
import JoinedJobDataService from '../services/joinedJob.service.js';

const JobList = ({skill, company, field, minExperience}) => {
  const [listings, setListings] = useState([]); 


  const retrieveJobs = () => {
    //JobDataService.getAll()
    JoinedJobDataService.getAll()
    .then(response => {
      setListings(response.data);
      return response.data;
    })
  }

  const handleSumbit = () => {
    // console.log(retrieveJobs());
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
        <Button type="submit" onClick={handleSumbit}/>
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