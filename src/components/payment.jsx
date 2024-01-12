import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export const Payment=()=>{
   
  
   
    // const openRazorpay = () => {
    //     const razorpayInstance = new Razorpay(razorpayOptions);
    //     razorpayInstance.open();
    //   }; 
    const checkoutHandler = async (amount) => {

      const { data: { key } } = await axios.get("http://www.localhost:5000/api/getkey")

      const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
          amount
      })

      const options = {
          key,
          amount: order.amount,
          currency: "INR",
          name: "6 Pack Programmer",
          description: "Tutorial of RazorPay",
          image: "https://avatars.githubusercontent.com/u/25058652?v=4",
          order_id: order.id,
          callback_url: "https://tiffiwalabackend.onrender.com/api/paymentverification",
          prefill: {
              name: "Gaurav Kumar",
              email: "gaurav.kumar@example.com",
              contact: "9999999999"
          },
          notes: {
              "address": "Razorpay Corporate Office"
          },
          theme: {
              "color": "#121212"
          }
      };
      const razor = new window.Razorpay(options);
      razor.open();
  }
    return(
        <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Payment Information</h2>
          <Form>
            {/* Your existing form fields */}

            <Button variant="primary" onClick={checkoutHandler} >
              Pay Now with Razorpay
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    )
}