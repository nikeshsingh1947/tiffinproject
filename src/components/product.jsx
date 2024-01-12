import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./product.css"

export const Product=()=>{
  const navigate = useNavigate();
  const [productdta]=useState(JSON.parse(localStorage.getItem("prdc")));
  const [quant,setQuant]=useState(1);
  const today = new Date().toISOString().split('T')[0];
  const [endDate, setEndDate] = useState(null);
  const quantfuncadd=()=>{
      setQuant((quant)=>quant+1)

  }
  const quantfuncmin=()=>{
    if(quant===1){
      return
    }
    else{
      setQuant((quant)=>quant-1)
    }
  }
  useEffect(() => {
    console.log(productdta);
  }, [productdta]);
  const  pagefunc=()=>{
    const start = new Date(today); 
    const end = new Date(start);
    end.setDate(end.getDate() + 30);
    setEndDate(end.toISOString().split('T')[0]); 
    console.log(endDate)
    if(productdta._id==="657c2637e57bf10b8b528a30"||productdta._id==="657c2f72e57bf10b8b528a34"||productdta._id==="657c2fefe57bf10b8b528a36"){
      const updated={
        ...productdta,
        quantity:quant,
        SubcriptionStart:start,
        SubscriptionEnd:end.toISOString().split('T')[0]
       }
       console.log(updated)
     let arr= JSON.parse(localStorage.getItem("tiffincart"))||[];
    arr.push(updated);
    localStorage.setItem("tiffincart",JSON.stringify(arr));
    }
    else{
      const updated={
        ...productdta,
        quantity:quant
        
       }
       console.log(updated)
     let arr= JSON.parse(localStorage.getItem("tiffincart"))||[];
    arr.push(updated);
    localStorage.setItem("tiffincart",JSON.stringify(arr));
    }
     
     

    navigate("/cart",{replace:true})
    // calculateEndDate()
  }
  const handleGoBack = () => {
    navigate("/",{replace:true}) // This will go back one step in the history stack
  };

  // const calculateEndDate = () => {
  //   const start = new Date(today); 
  //   const end = new Date(start);
  //   end.setDate(end.getDate() + 30);
  //   setEndDate(end.toISOString().split('T')[0]); 
  //   const updated1={
  //     ...productdta,
  //     SubcriptionStart:start,
  //     SubscriptionEnd:end.toISOString().split('T')[0]
      
  //    }
  //    console.log(updated1)
  //   let arr= JSON.parse(localStorage.getItem("tiffincart"))||[];
    
  //   arr.push(updated1);
  //   localStorage.setItem("tiffincart",JSON.stringify(arr));
  // };
  
    return(
        <div id="main-cont">
          <h1 id="heading-main">Product</h1>
          <div id="prod-cont">
            <div id="prod-image-cont"><img src={productdta.foodimage} alt="foodimage" /></div>
            <div id="prod-detail-cont">
             <h3 id="prod-name">{productdta.foodname}</h3>
             <p> Item : {productdta.item}</p>
             <p>Type : {productdta.veg ?(<span>VEG</span>):(<span>Non-VEg</span>)}</p>
             <p>Only in <span>{productdta.type}</span></p>        
             <p>Day : {productdta.Day}</p>
             </div>
          </div>
          <div id="qty-cont">
          <button onClick={quantfuncmin} className="btnqty">-</button><h5>quantity :{quant}  </h5><button onClick={quantfuncadd} className="btnqty">+</button>
          </div>
          <button onClick={handleGoBack} id="btnback">Go Back</button><button onClick={pagefunc} id="btnaddtocart">add to cart</button>
        </div>
    )
}