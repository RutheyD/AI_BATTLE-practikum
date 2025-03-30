import { Outlet } from "react-router"
import NavBar from "./navBar"

const AppLayout=()=>{
return(<>

<NavBar/>
{/* <Footer/> */}
<Outlet/>
</>)
}
export default AppLayout