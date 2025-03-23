import { Outlet } from "react-router"
import NavBar from "./navBar"

const AppLayout=()=>{
return(<>

{/* <Home/> */}
<NavBar/>
<Outlet/>
</>)
}
export default AppLayout