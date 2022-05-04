import React, { useState } from 'react';
import JobList from './JobList.js'
import ApplicantService from '../services/applicant.service.js'
import {DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap';
import './home.css';

const MainPage = () => {



    const [skill, setSkill] = useState()
    const [company, setCompany] = useState()
    const [field, setField] = useState()
    const [minExperience, setMinExperience] = useState()

    return (
        <div className="jobList">
            <div className="headerFilter">
                <div>
                    <DropdownButton
                    as={ButtonGroup}
                    align={{ lg: 'end' }}
                    title="Skill"
                    id="dropdown-menu-align-responsive-1"
                    onSelect={(event) => {setSkill(event)}}>
                        <Dropdown.Item eventKey="1">Engineering</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Math</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Programming</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Accounting</Dropdown.Item>
                        <Dropdown.Item eventKey="5">HR</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Management</Dropdown.Item>
                        <Dropdown.Item eventKey="7">Marketing</Dropdown.Item>
                        <Dropdown.Item eventKey="8">Writing</Dropdown.Item>
                        <Dropdown.Item eventKey="9">Counseling</Dropdown.Item>
                        <Dropdown.Item eventKey="10">Medicine</Dropdown.Item>
                        <Dropdown.Item eventKey="11">Caretaking</Dropdown.Item>
                        <Dropdown.Item eventKey="12">Mechanic</Dropdown.Item>
                        <Dropdown.Item eventKey="13">Electrical</Dropdown.Item>
                        <Dropdown.Item eventKey="14">Plumbing</Dropdown.Item>
                        <Dropdown.Item eventKey="15">Labor</Dropdown.Item>
                        <Dropdown.Item eventKey="16">Driving</Dropdown.Item>
                        <Dropdown.Item eventKey="17">Law</Dropdown.Item>
                        <Dropdown.Item eventKey="18">Executive</Dropdown.Item>
                    </DropdownButton>
                </div>

                <div>
                    <DropdownButton
                    as={ButtonGroup}
                    align={{ lg: 'end' }}
                    title="Company"
                    id="dropdown-menu-align-responsive-1"
                    onSelect={(event) => {setCompany(event)}}>
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
                    onSelect={(event) => {setField(event)}}>
                        <Dropdown.Item eventKey="0">Other</Dropdown.Item>
                        <Dropdown.Item eventKey="1">Information Technology</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Architecture and Engineering</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Entertainment</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Health Care</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Consumer Discretionary</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Consumer Staples</Dropdown.Item>
                        <Dropdown.Item eventKey="7">Finance</Dropdown.Item>
                        <Dropdown.Item eventKey="8">Telecommunication Services</Dropdown.Item>
                        <Dropdown.Item eventKey="9">Utilities</Dropdown.Item>
                        <Dropdown.Item eventKey="10">Real Estate</Dropdown.Item>

                    </DropdownButton>
                </div>

                <div>
                    <DropdownButton
                    as={ButtonGroup}
                    align={{ lg: 'end' }}
                    title="MinExperience"
                    id="dropdown-menu-align-responsive-1"
                    onSelect={(event) => {setMinExperience(event)}}>
                        <Dropdown.Item eventKey="0">0</Dropdown.Item>
                        <Dropdown.Item eventKey="1">1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">3</Dropdown.Item>
                        <Dropdown.Item eventKey="4">4</Dropdown.Item>
                        <Dropdown.Item eventKey="5">5</Dropdown.Item>
                        <Dropdown.Item eventKey="6">6</Dropdown.Item>
                        <Dropdown.Item eventKey="7">7</Dropdown.Item>
                        <Dropdown.Item eventKey="8">8</Dropdown.Item>
                        <Dropdown.Item eventKey="9">9</Dropdown.Item>
                        <Dropdown.Item eventKey="10">10+</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <JobList skill={skill} company={company} field={field} minExperience={minExperience}/>
        </div>
    )

}

export default MainPage;
