import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import "./cart.css"
    import React, { useState } from "react";
    import {  useSelector } from "react-redux";
    import { useNavigate } from "react-router-dom";
    import axios from "axios";
    export const Cart=()=> {
      const navigate = useNavigate();  
      const user = useSelector((store) => store.userData.user);
      const [cartitem,setCartitem]=useState(JSON.parse(localStorage.getItem("tiffincart")));
         console.log(user)
        //  const [total,setTotal]=useState(0);
          const calculateTotal = () => {
              return cartitem.reduce((total, item) => total +( item.foodprice*item.quantity), 0);
           };
  const calccheckout=(el)=>{
   
   return (Number(el)+20).toFixed(2)
  }
  const handleGoBack = () => {
    navigate("/product",{replace:true}) // This will go back one step in the history stack
  };
  const handleDeleteItem = (itemId) => {
    const updatedCart = cartitem.filter((item) => item._id !== itemId);
    setCartitem(updatedCart);
    localStorage.setItem("tiffincart", JSON.stringify(updatedCart));
  };


  const checkoutHandler = async () => {
     const amount=cartitem.reduce((total, item) => total +( item.foodprice*item.quantity), 0)
    const { data: { key } } = await axios.get("https://tiffiwalabackend.onrender.com/api/getkey")
    
    const { data: { order } } = await axios.post("https://tiffiwalabackend.onrender.com/api/checkout", {
        amount
    })
    console.log(order.amount)
    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Delhi Tiffin wala",
        description: "Tutorial of RazorPay",
        image: "https://lh3.googleusercontent.com/pw/ADCreHcMGATbRXCnBFcu1Uf5s2Zjzsu_VyrNedvCiC1T8EIAcEo_B4Nm6sl2_9F-x3_Ao6z-6D4tC-40ZPtTyDqKcU4mXS5_TIMdVyjMSJCyzzkeMkvgXw=w2400",
        order_id: order.id,
        callback_url: "https://tiffiwalabackend.onrender.com/api/paymentverification",
        prefill: {
            name: user.user.name,
            email: user.user.email,
            contact:user.user.mobileNumber
        },
        notes: {
            "address":user.user.address
        },
        theme: {
            "color": "#121212" 
        }
    };
    const razor = new window.Razorpay(options);
        razor.open();
}
         return (
          <div>
            <button onClick={handleGoBack}>Go Back</button>
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="/" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </a>
                    </MDBTypography>
    
                    <hr />
    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {cartitem.length} items in your cart</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
                    {cartitem.map((el)=>(
                    <MDBCard className="mb-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src={el.foodimage}
                                fluid className="rounded-3" style={{ width: "65px" }}
                                alt="Shopping item" />
                            </div>
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                              {el.foodname}
                              </MDBTypography>
                              <p className="small mb-0">{el.item}</p>
                              {el.SubcriptionStart && el.SubscriptionEnd
 && (
                    <p style={{ color: "red" }}>
                      {el.SubcriptionStart} to {el.SubscriptionEnd
}
                    </p>
                  )}
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography tag="h5" className="fw-normal mb-0">
                              {el.quantity}
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                              ₹{el.foodprice}
                              </MDBTypography>
                            </div>
                            <button
                                  href="#!"
                                 className="dlt-btn"
                                  onClick={() => handleDeleteItem(el._id)}
                                >Remove
                                  {/* <MDBIcon fas icon="trash-alt" /> */}
                                </button>
                          </div>
                        </div>
                      </MDBCardBody>
                     </MDBCard>
                     ))}
                  </MDBCol>
    
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Bill details
                          </MDBTypography>
                          {/* <MDBCardImage src=""
                            fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" /> */}
                        </div>
    
                        
    
                        
    
                        <hr />
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">₹{calculateTotal().toFixed(2)}</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">₹20.00</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">₹{calccheckout(calculateTotal().toFixed(2))}</p>
                        </div>
    
                        <MDBBtn color="info" block size="lg" onClick={checkoutHandler}>
                          <div className="d-flex justify-content-between">
                            {/* <span>₹{calccheckout(calculateTotal().toFixed(2))}</span> */}
                            <span>
                               Proceed to payment{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
    );
    }