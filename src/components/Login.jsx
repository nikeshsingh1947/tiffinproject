import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Radhalogo from "../Logo 500x500PXL.jpg"
import { useDispatch, useSelector } from "react-redux";
import { Postlogin } from "../Redux/AuthRedux/action";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const error=useSelector((store)=>store.userData.error)
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [input, setInput] = useState('')
  const [pass,setPass]=useState("");
  const handleInputChange = (e) => setInput(e.target.value)
  const handleSubmit=()=>{   
    dispatch(Postlogin({email:input,password:pass})) 
     check()
 }
 const user=useSelector((store)=>store.userData.user)
 const check=()=>{
  console.log(user.token)
  if(user.token!==undefined){
      
    alert("login Success")
    navigate("/",{replace:true})
 
 }
 else{
    
    if(error===undefined||error!==""){
      alert("entered email or password is wrong")
    }
    }

}
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
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleInputChange} />
                      </Form.Group> 
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} />
                      </Form.Group> 
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary"  onClick={handleSubmit}>
                          login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        don't have an account??{' '}
                        <a href={'/registration'} className="text-primary fw-bold">
                          Sign up
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