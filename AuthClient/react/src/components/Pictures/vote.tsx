import { Box, Button } from "@mui/material"
import { getUserIdByToken } from "../store/getFromToken"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { addVote, deleteVote } from "../redux/imageSlice";
import { useState } from "react";
import { color } from "framer-motion";

const Vote=({imageId,challengeId}:{imageId:number,challengeId:number})=>{
const userId=getUserIdByToken()
const dispatch=useDispatch<AppDispatch>();
// const vote=useSelector((state:RootState)=>state.iamges.imagesByChallenge);
// const deleteVote=useSelector((state:RootState)=>state.iamges.imagesByChallenge);
const[isVote,setIsVote]=useState(false);
// const clickAddVote=()=>{
//     dispatch(addVote({userId,imageId,challengeId}))
// }
// const clickDeleteVote=()=>{
//     dispatch(deleteVote({userId,imageId,challengeId}))
// }
const token=sessionStorage.getItem('token')
const clickVote=()=>{
    if(isVote){
    dispatch(deleteVote({userId,imageId,challengeId}))

    }
else{
    dispatch(addVote({userId,imageId,challengeId}))

}
setIsVote(!isVote)
}
/*☝️*/
return(<>
<Button onClick={clickVote} disabled={token==null} style={{color:isVote?'orange':'black'}} >+</Button>
{/* <Box></Box> */}
{/* <Button onClick={clickDeleteVote}>👇</Button> */}
</>)
}
export default Vote