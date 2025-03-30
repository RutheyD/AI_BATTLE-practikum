import { Outlet } from "react-router"
import NavBar from "./navBar"
import Footer from "./footer"

const AppLayout=()=>{
return(<>

<NavBar/>
<Footer/>
<Outlet/>
</>)
}
export default AppLayout