import { CardContent, IconButton, Typography } from "@mui/material"
import { getUserIdByToken } from "../store/getFromToken"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addVote, deleteVote } from "../redux/imageSlice";
import { useState } from "react";
import { CaretUpOutlined,CaretDownOutlined } from '@ant-design/icons';

const Vote=({imageId,challengeId,countVotes}:{imageId:number,challengeId:number,countVotes:number})=>{
const userId=getUserIdByToken()

const dispatch=useDispatch<AppDispatch>();
const[isVote,setIsVote]=useState(false);

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
return(<>
<IconButton onClick={clickVote} disabled={token==null}style={{color:isVote?'orange':'black',fontWeight:"bold",fontSize:"50px"}}>{isVote?<CaretUpOutlined />:<CaretDownOutlined />}</IconButton>
<CardContent>
                      {/* <Typography variant="h6">pic {index + 1}</Typography> */}
<Typography variant="h6" style={{color:isVote?'orange':'black',fontWeight:"bold"}}>{countVotes}</Typography>
</CardContent>
</>)
}
export default Vote