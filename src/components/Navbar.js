import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Logoutreq } from "../Redux/AuthRedux/action";
import Radhalogo from ".././withoutbg-removebg-preview.png"
import Banner from "./banner.gif"
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import CartButton from './Cartbutton';
const Navbar = () => {
    const status = useSelector((store) => store.userData.isAuth);
    const user = useSelector((store) => store.userData.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlelogout = () => {
        if (status) {
          dispatch(Logoutreq());
          navigate("/", { replace: true });
        } else {
          navigate("/registration", { replace: true });
        }
      };
    return (
        < >
        <div id="main-nav-cont">
        <div id='top-banner'>
            <img src={Banner} alt="banner" />
        </div>
        <div id='loginouter'>
        <CartButton onClick={"/cart"}/>
        <button  id='loginbtn' onClick={handlelogout}>{status ? `Logout ${user.user.name}` : `login/signup`} </button>
        </div >
            <div style={{"width":"25%","height":"40%"}} id='logoouter' className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
                
                   <img style={{"width":"100%","height":"100%"}} src={Radhalogo} alt="Logo" />
                    
            </div>
            </div>
        </>
    )
}

export default Navbar