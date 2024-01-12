import React from 'react';
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useDispatch, useSelector } from "react-redux";
import { Postuser } from "../Redux/AuthRedux/action";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Radhalogo from "../Logo 500x500PXL.jpg"
export default function Registration() {
  const user=useSelector((store)=>store.userData.reg)
  const dispatch = useDispatch();
  const [input, setInput] = useState('')
  const [pass,setPass]=useState("");
  const [name,setName]=useState("");
  const [mobile,setMobile]=useState(0);
  const [address,setAddress]=useState("");
  const [statename,setStatename]=useState("");
  const [areapin,setAreapin]=useState(0);
  const [userdet,setUserdet]=useState("");
  const navigate=useNavigate();
  const hnadleSubmit=()=>{
   
    dispatch(Postuser({name:name,
      email: input,
      address:address,
      city:"delhi",
      state:statename,
      pincode:areapin,
      mobileNumber:mobile,
      password:pass}))
      
    if(user.token===undefined){
      setUserdet(user)
      console.log(userdet)
       alert("something went wrong try again using diffrent Email")  
    }
    else{
       navigate("/login",{replace:true})
    }
 }
 console.log(user.token)
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                <img style={{"width":"50%","height":"100%","margin":"auto"}} src={Radhalogo} alt="Logo" />
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" onChange={(e)=>setInput(e.target.value)} placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Mobile Number
                        </Form.Label>
                        <Form.Control type="number" onChange={(e)=>setMobile(e.target.value)} placeholder="Enter 10 digit mobile number" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Address
                        </Form.Label>
                        <Form.Control type="text"  onChange={(e)=>setAddress(e.target.value)} placeholder="Enter full address" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Pin Code
                        </Form.Label>
                        <Form.Control type="number" onChange={(e)=>setAreapin(e.target.value)} placeholder="Enter 6 digit area pin code" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="stateDropdown">
                        <Form.Label className="text-center">State</Form.Label>
                        <Form.Select onChange={(e)=>setStatename(e.target.value)}>
                          <option>Select State</option>
                            <option >Delhi</option>
                        </Form.Select>
                        </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary"  onClick={hnadleSubmit}>
                          Sign-up
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <a href={"/login"} className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
