import { Routes ,Route} from "react-router-dom"
import { Home } from "./Home"
import Registration from "./Registration"
import { Product } from "./product"
import { Cart } from "./cart"
import { Admin } from "./admin"
import Login from "./Login"
import { Payment } from "./payment"
import AboutUs from "./Aboutus"
import { TermsAndConditions } from "./Termsandcondition"
import { PaymentSuccess } from "./PaymentSuccses"
export const AllRoutes=()=>{

    return(
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/terms&condition" element={<TermsAndConditions/>}></Route>
        <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
       </Routes>
    )
}