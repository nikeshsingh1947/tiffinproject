import React,{useEffect, useState } from 'react';
import { Fetchorder } from "../Redux/OrderRedux/action";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "./admin.css"
import Radhalogo from "../Logo 500x500PXL.jpg"
import { Adminlogin, Logoutreq } from '../Redux/adminredux/action';
export const Admin=()=>{
    const navigate = useNavigate();
    const red = useSelector((store) => store.orderData.pictures);
  const admin=useSelector((store)=>store.admindata.user)
  const error=useSelector((store)=>store.admindata.error)  
  const dispatch = useDispatch();
  const status = useSelector((store) => store.admindata.isAuth);
  // const status=true
  const [num, setNum] = useState(0);
    const [input, setInput] = useState('')
    // const [wrigth,setWright]=useState(0);
    const [pass,setPass]=useState("");
    const handleInputChange = (e) => setInput(e.target.value)
    useEffect(() => {
        if (red.length === 0) {
          dispatch(Fetchorder());
          console.log(red)
        }
        if (num === 0) {
          setNum((num) => num + 1);
          dispatch(Fetchorder()); 
          console.log(red)
        }
},[red, num, dispatch])

const handleSubmit=()=>{   
  dispatch(Adminlogin({email:input,password:pass})) 
   check()
}

  
  // const itemsTotalCost = red.items.reduce((total, item) => {
  //   return total + item.food.foodprice * item.quantity;
  // }, 0);
  // const subscriptionTotalCost = red.subscription.reduce((total, subscription) => {
  //   // Assuming the subscription.food object has a foodprice property
  //   return total + subscription.food.foodprice * subscription.quantity;
  // }, 0);
  const calculateTotalAmount = (order) => {
    const itemsTotalCost = order.items.reduce((total, item) => {
      const foodPrice = item.food?.foodprice || 0; // Handle undefined or missing foodprice
      return total + foodPrice * item.quantity;
    }, 0);
  
    const subscriptionTotalCost = order.subscription.reduce((total, subscription) => {
      const foodPrice = subscription.food?.foodprice || 0; // Handle undefined or missing foodprice
      return total + foodPrice * subscription.quantity;
    }, 0);
  
    return Number(itemsTotalCost + subscriptionTotalCost);
  };
const nextdispatch=()=>{
  dispatch(Fetchorder());
  
  // setWright(itemsTotalCost()+subscriptionTotalCost())
  console.log(red)
}
const check=()=>{
  nextdispatch()
  console.log(admin.token)
    if(admin.token!==undefined){
        
      alert("login Success")
    
  
  }
  else{
      
      if(error===undefined||error!==""){
        alert("entered email or password is wrong")
      }
      }
  }

  const handlelogout = () => {
    if (status) {
      dispatch(Logoutreq());
      navigate("/", { replace: true });
    }
  }
    return(
      <div>
      {status ?  
      (<div className='main-container'>
        <button onClick={handlelogout} id='admin-lgt'>LOGOUT ADMIN</button>
      <h2>Order Table</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Customer Name</th>
            <th>Food Item</th>
            <th>Address</th>
            <th>City</th>
            <th>Mobile N.O</th>
            <th>Email address</th>
            <th>Order ID</th>
            <th>Customer ID</th>
            <th>Amount</th>
            <th>Delivery Status</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {red.map((order, index) => (
            <tr >
              <td>{index+1}</td>
              <td>{order.user.name}l</td>
              <td>{order.items.map((el)=>(
                <div className='tdinnerdiv'>
                <p>{el.food.foodname}</p>
                <p className='qty'> Quantity:</p><p>{el.quantity}</p>
                </div>
              ))} 
               </td>
              <td>{order.user.address}</td>
              <td>{order.user.city}</td>
              <td>{order.user.mobileNumber}</td>
              <td>{order.user.email}</td>
              <td>{order._id}</td>
              <td>{order.user._id}</td>
              {/* <td>₹{wrigth ? `${itemsTotalCost+subscriptionTotalCost}` : `0`}</td> */}
              <td>₹{calculateTotalAmount(order)}</td>
              <td><button>deleverd</button></td>
            </tr>
           ))}
        </tbody>
      </table>
      
    </div>):(<div>
         <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                <h2>ADMIN PAGE</h2>
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
                    
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>)
    }
    </div>
    )
}