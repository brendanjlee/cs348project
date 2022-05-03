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
            <DropdownButton
              as={ButtonGroup}
              align={{ lg: 'end' }}
              title="Skill"
              id="dropdown-menu-align-responsive-1"
            >
              <Dropdown.Item eventKey="1">Engineering</Dropdown.Item>
              <Dropdown.Item eventKey="2">Programming</Dropdown.Item>
              <Dropdown.Item eventKey="3">Accounting</Dropdown.Item>
              <Dropdown.Item eventKey="4">HR</Dropdown.Item>
              <Dropdown.Item eventKey="5">Management</Dropdown.Item>
              <Dropdown.Item eventKey="6">Marketing</Dropdown.Item>
              <Dropdown.Item eventKey="7">Writing</Dropdown.Item>
              <Dropdown.Item eventKey="8">Counseling</Dropdown.Item>
              <Dropdown.Item eventKey="9">Medicine</Dropdown.Item>
              <Dropdown.Item eventKey="10">Caretaking</Dropdown.Item>
              <Dropdown.Item eventKey="11">Mechanic</Dropdown.Item>
              <Dropdown.Item eventKey="12">Electrical</Dropdown.Item>
              <Dropdown.Item eventKey="13">Plumbing</Dropdown.Item>
              <Dropdown.Item eventKey="14">Labor</Dropdown.Item>
              <Dropdown.Item eventKey="15">Driving</Dropdown.Item>
              <Dropdown.Item eventKey="16">Law</Dropdown.Item>
              <Dropdown.Item eventKey="17">Executive</Dropdown.Item>

            </DropdownButton>
            </div>

            <div>
            <DropdownButton
              as={ButtonGroup}
              align={{ lg: 'end' }}
              title="Company"
              id="dropdown-menu-align-responsive-1"
              >
              <Dropdown.Item eventKey="1">Facebook</Dropdown.Item>
              <Dropdown.Item eventKey="2">apple</Dropdown.Item>
              <Dropdown.Item eventKey="3">Amazon</Dropdown.Item>
              <Dropdown.Item eventKey="4">Netflix</Dropdown.Item>
              <Dropdown.Item eventKey="5">Google</Dropdown.Item>
              <Dropdown.Item eventKey="6">Burger King</Dropdown.Item>
              <Dropdown.Item eventKey="7">McDonalds</Dropdown.Item>
              <Dropdown.Item eventKey="8">Target</Dropdown.Item>
              <Dropdown.Item eventKey="9">Walmart</Dropdown.Item>
              <Dropdown.Item eventKey="10">JPMorgan Chase & Co</Dropdown.Item>
              <Dropdown.Item eventKey="11">Bank of America</Dropdown.Item>
              <Dropdown.Item eventKey="12">Wells Fargo</Dropdown.Item>
              <Dropdown.Item eventKey="13">Goldman Sachs</Dropdown.Item>

            </DropdownButton>
            </div>

            <div>
            <DropdownButton
              as={ButtonGroup}
              align={{ lg: 'end' }}
              title="Field"
              id="dropdown-menu-align-responsive-1"
              >
              <Dropdown.Item eventKey="1">Other</Dropdown.Item>
              <Dropdown.Item eventKey="2">Information Technology</Dropdown.Item>
              <Dropdown.Item eventKey="3">Architecture and Engineering</Dropdown.Item>
              <Dropdown.Item eventKey="4">Entertainment</Dropdown.Item>
              <Dropdown.Item eventKey="5">Health Care</Dropdown.Item>
              <Dropdown.Item eventKey="6">Consumer Discretionary</Dropdown.Item>
              <Dropdown.Item eventKey="7">Consumer Staples</Dropdown.Item>
              <Dropdown.Item eventKey="8">Finance</Dropdown.Item>
              <Dropdown.Item eventKey="9">Telecommunication Services</Dropdown.Item>
              <Dropdown.Item eventKey="10">Utilities</Dropdown.Item>
              <Dropdown.Item eventKey="11">Real Estate</Dropdown.Item>

            </DropdownButton>
            </div>

            <div>
            <DropdownButton
              as={ButtonGroup}
              align={{ lg: 'end' }}
              title="Field"
              id="dropdown-menu-align-responsive-1"
              >
              <Dropdown.Item eventKey="1">Other</Dropdown.Item>
              <Dropdown.Item eventKey="2">Information Technology</Dropdown.Item>
              <Dropdown.Item eventKey="3">Architecture and Engineering</Dropdown.Item>
              <Dropdown.Item eventKey="4">Entertainment</Dropdown.Item>
              <Dropdown.Item eventKey="5">Health Care</Dropdown.Item>
              <Dropdown.Item eventKey="6">Consumer Discretionary</Dropdown.Item>
              <Dropdown.Item eventKey="7">Consumer Staples</Dropdown.Item>
              <Dropdown.Item eventKey="8">Finance</Dropdown.Item>
              <Dropdown.Item eventKey="9">Telecommunication Services</Dropdown.Item>
              <Dropdown.Item eventKey="10">Utilities</Dropdown.Item>
              <Dropdown.Item eventKey="11">Real Estate</Dropdown.Item>
            </DropdownButton>
            </div>

            <div>
            <DropdownButton
              as={ButtonGroup}
              align={{ lg: 'end' }}
              title="MinExperience"
              id="dropdown-menu-align-responsive-1"
              >
              <Dropdown.Item eventKey="1">0</Dropdown.Item>
              <Dropdown.Item eventKey="2">1</Dropdown.Item>
              <Dropdown.Item eventKey="3">2</Dropdown.Item>
              <Dropdown.Item eventKey="4">3</Dropdown.Item>
              <Dropdown.Item eventKey="5">4</Dropdown.Item>
              <Dropdown.Item eventKey="6">5</Dropdown.Item>
              <Dropdown.Item eventKey="7">6</Dropdown.Item>
              <Dropdown.Item eventKey="8">7</Dropdown.Item>
              <Dropdown.Item eventKey="9">8</Dropdown.Item>
              <Dropdown.Item eventKey="10">9</Dropdown.Item>
              <Dropdown.Item eventKey="11">10</Dropdown.Item>
            </DropdownButton>
            </div>

          <JobList/>
        </div>
    )

}

export default MainPage;
