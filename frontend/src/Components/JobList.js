import React, { useState, useEffect } from 'react';
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
      console.log(response.data)
      //console.log(listings);
      return response.data;
    })
  }

  const handleSumbit = () => {
    console.log('retrieve list')
    console.log(retrieveJobs());
  }

  useEffect(() => {
    console.log('joer!');

    JobDataService.getAll()
    .then(response => {
      setListings(response.data);
      console.log(response.data)
      return
    })
  })


  return (
    <div>
      <div className='job-list'>
        <h2>Job Listings</h2>
        <Button type="submit" onClick={handleSumbit}/>
        <ul className='list-group'>
          asfdkjflksdjfalkjflkdjflskdfj
        </ul>
      </div>
    </div>
  )
}

export default JobList;