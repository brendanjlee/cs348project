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
                        <Dropdown.Item eventKey="Engineering">Engineering</Dropdown.Item>
                        <Dropdown.Item eventKey="Math">Math</Dropdown.Item>
                        <Dropdown.Item eventKey="Programming">Programming</Dropdown.Item>
                        <Dropdown.Item eventKey="Accounting">Accounting</Dropdown.Item>
                        <Dropdown.Item eventKey="HR">HR</Dropdown.Item>
                        <Dropdown.Item eventKey="Management">Management</Dropdown.Item>
                        <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
                        <Dropdown.Item eventKey="Writing">Writing</Dropdown.Item>
                        <Dropdown.Item eventKey="Counseling">Counseling</Dropdown.Item>
                        <Dropdown.Item eventKey="Medicine">Medicine</Dropdown.Item>
                        <Dropdown.Item eventKey="Caretaking">Caretaking</Dropdown.Item>
                        <Dropdown.Item eventKey="Mechanic">Mechanic</Dropdown.Item>
                        <Dropdown.Item eventKey="Electrical">Electrical</Dropdown.Item>
                        <Dropdown.Item eventKey="Plumbing">Plumbing</Dropdown.Item>
                        <Dropdown.Item eventKey="Labor">Labor</Dropdown.Item>
                        <Dropdown.Item eventKey="Driving">Driving</Dropdown.Item>
                        <Dropdown.Item eventKey="Law">Law</Dropdown.Item>
                        <Dropdown.Item eventKey="Executive">Executive</Dropdown.Item>
                    </DropdownButton>
                </div>

                <div>
                    <DropdownButton
                    as={ButtonGroup}
                    align={{ lg: 'end' }}
                    title="Company"
                    id="dropdown-menu-align-responsive-1"
                    onSelect={(event) => {setCompany(event)}}>
                        <Dropdown.Item eventKey="Facebook">Facebook</Dropdown.Item>
                        <Dropdown.Item eventKey="Apple">Apple</Dropdown.Item>
                        <Dropdown.Item eventKey="Amazon">Amazon</Dropdown.Item>
                        <Dropdown.Item eventKey="Netflix">Netflix</Dropdown.Item>
                        <Dropdown.Item eventKey="Google">Google</Dropdown.Item>
                        <Dropdown.Item eventKey="Burger King">Burger King</Dropdown.Item>
                        <Dropdown.Item eventKey="McDonalds">McDonalds</Dropdown.Item>
                        <Dropdown.Item eventKey="Target">Target</Dropdown.Item>
                        <Dropdown.Item eventKey="Walmart">Walmart</Dropdown.Item>
                        <Dropdown.Item eventKey="JPMorgan Chase & Co">JPMorgan Chase & Co</Dropdown.Item>
                        <Dropdown.Item eventKey="Bank of America">Bank of America</Dropdown.Item>
                        <Dropdown.Item eventKey="Wells Fargo">Wells Fargo</Dropdown.Item>
                        <Dropdown.Item eventKey="Goldman Sachs">Goldman Sachs</Dropdown.Item>
                    </DropdownButton>
                </div>

                <div>
                    <DropdownButton
                    as={ButtonGroup}
                    align={{ lg: 'end' }}
                    title="Field"
                    id="dropdown-menu-align-responsive-1"
                    onSelect={(event) => {setField(event)}}>
                        <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                        <Dropdown.Item eventKey="Information Technology">Information Technology</Dropdown.Item>
                        <Dropdown.Item eventKey="Architecture and Engineering">Architecture and Engineering</Dropdown.Item>
                        <Dropdown.Item eventKey="Entertainment">Entertainment</Dropdown.Item>
                        <Dropdown.Item eventKey="Health Care">Health Care</Dropdown.Item>
                        <Dropdown.Item eventKey="Consumer Discretionary">Consumer Discretionary</Dropdown.Item>
                        <Dropdown.Item eventKey="Consumer Staples">Consumer Staples</Dropdown.Item>
                        <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                        <Dropdown.Item eventKey="Telecommunication Services">Telecommunication Services</Dropdown.Item>
                        <Dropdown.Item eventKey="Utilites">Utilities</Dropdown.Item>
                        <Dropdown.Item eventKey="Real Estate">Real Estate</Dropdown.Item>
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
