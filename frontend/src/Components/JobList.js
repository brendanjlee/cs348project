import React, { useState } from 'react';
import {Link, renderMatches} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import JobDataService from '../services/job.service'

const JobList = () => {
  const [listings, setListings] = useState([]); 

  const retrieveJobs = () => {
    JobDataService.getAll()
    .then(response => {
      setListings(response.data);
      console.log(listings);
    })
  }


  return (
    <div>
      <div className='job-list'>
        <h2>Job Listings</h2>
        <ul className='list-group'>
          {listings &&
                listings.map((listing, index) => (
                  <li>
                    {listings.job_title}
                  </li>
                ))}
        </ul>
      </div>
    </div>
  )
}