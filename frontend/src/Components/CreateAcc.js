import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './home.css';


const CreateAcc = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [skillId, setSkillId] = useState("")
    const [exper, setExper] = useState(0)
    let navigate = useNavigate()


    const handleSkillId = (e) => {
        switch(e.target.value) {
            case 'Engineering':
                setSkillId(1)
                break;
            case 'Math':
                setSkillId(2)
                break;
            case 'Programming':
                setSkillId(3)
                break;
            case 'Accounting':
                setSkillId(4)
                break;
            case 'HR':
                setSkillId(5)
                break;
            case 'Management':
                setSkillId(6)
                break;
            case 'Marketing':
                setSkillId(7)
                break;
            case 'Writing':
                setSkillId(8)
                break;
            case 'Counseling':
                setSkillId(9)
                break;
            case 'Medicine':
                setSkillId(10)
                break;
            case 'Caretaking':
                setSkillId(11)
                break;
            case 'Mechanic':
                setSkillId(12)
                break;
            case 'Electrical':
                setSkillId(13)
                break;
            case 'Plumbing':
                setSkillId(14)
                break;
            case 'Labor':
                setSkillId(15)
                break;
            case 'Driving':
                setSkillId(16)
                break;
            case 'Law':
                setSkillId(17)
                break;
            case 'Executive':
                setSkillId(18)
                break;
            default:
                break;
        }
    }
    const handleSumbit = () => {
        console.log(email)
        console.log(name)
        console.log(phone)
        console.log(skillId)
        console.log(exper)

        //TODO: *Add Axios post call to add user to database*
        
        navigate("/Home")
    }

    return (
        <div className="formContainer">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event) => setEmail(event.target.value)}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event) => setName(event.target.value)}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group onChange={(event) => setPhone(event.target.value)}>
                    <Form.Label>Phone #</Form.Label>
                    <Form.Control typer="tel" data-format="+1 (ddd)-(dddd)-(ddd)"/>
                </Form.Group>
                <Form.Group onChange={handleSkillId}>
                    <Form.Label>Skill</Form.Label>
                    <Form.Select>
                        <option>Engineering</option>
                        <option>Math</option>
                        <option>Programming</option>
                        <option>Accounting</option>
                        <option>HR</option>
                        <option>Management</option>
                        <option>Marketing</option>
                        <option>Writing</option>
                        <option>Counseling</option>
                        <option>Medicine</option>
                        <option>Caretaking</option>
                        <option>Mechanic</option>
                        <option>Electrical</option>
                        <option>Plumbing</option>
                        <option>Labor</option>
                        <option>Driving</option>
                        <option>Law</option>
                        <option>Executive</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event) => setExper(event.target.value)}>
                    <Form.Label>Years of Experience</Form.Label>
                    <Form.Control type="number" placeholder="# Years" />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit" onClick={handleSumbit}>
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default CreateAcc;