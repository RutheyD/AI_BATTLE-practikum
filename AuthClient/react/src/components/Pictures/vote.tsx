// import { CardContent, IconButton, Typography } from "@mui/material"
// import { getUserIdByToken } from "../store/getFromToken"
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../redux/store";
// import { addVote, deleteVote } from "../redux/imageSlice";
// import { useState } from "react";
// import { CaretUpOutlined,CaretDownOutlined } from '@ant-design/icons';

// const Vote=({imageId,challengeId,countVotes}:{imageId:number,challengeId:number,countVotes:number})=>{
// const userId=getUserIdByToken()

// const dispatch=useDispatch<AppDispatch>();
// const[isVote,setIsVote]=useState(false);

// const token=sessionStorage.getItem('token')
// const clickVote=()=>{
//     if(isVote){
//     dispatch(deleteVote({userId,imageId,challengeId}))

//     }
// else{
//     dispatch(addVote({userId,imageId,challengeId}))

// }
// setIsVote(!isVote)
// }

// return(<>
// <IconButton onClick={clickVote} disabled={token==null}style={{color:isVote?'orange':'black',fontWeight:"bold",fontSize:"50px"}}>{isVote?<CaretUpOutlined />:<CaretDownOutlined />}</IconButton>
// <CardContent>
// <Typography variant="h6" style={{color:isVote?'orange':'black',fontWeight:"bold"}}>{countVotes}</Typography>
// </CardContent>
// </>)
// }
// export default Vote
import { CardContent, IconButton, Typography } from "@mui/material";
import { getUserIdByToken } from "../store/getFromToken";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addVote, deleteVote } from "../redux/imageSlice";
import { useState, useEffect } from "react";
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { getUserIdByImageId } from "../redux/imageSlice"; // הוספת ה-import של ה-thunk

const Vote = ({ imageId, challengeId, countVotes }: { imageId: number; challengeId: number; countVotes: number }) => {
  const userIdFromToken = getUserIdByToken();  // זה ה-userId של המשתמש שמחובר בטוקן
  const dispatch = useDispatch<AppDispatch>();
  const [isVote, setIsVote] = useState(false);
  const [imageUserId, setImageUserId] = useState<number | null>(null);

  const token = sessionStorage.getItem('token');

  useEffect(() => {
    dispatch(getUserIdByImageId(imageId))
      .unwrap()
      .then((userId) => {
        setImageUserId(userId); 
      })
      .catch((error) => {
        console.error("Failed to fetch userId", error);
      });
  }, [imageId, dispatch]);

  const clickVote = () => {
    if (isVote) {
      dispatch(deleteVote({ userId: userIdFromToken, imageId, challengeId }));
    } else {
      dispatch(addVote({ userId: userIdFromToken, imageId, challengeId }));
    }
    setIsVote(!isVote);
  };

  const isDisabled = (token === null || userIdFromToken === imageUserId);  

  return (
    <>
      <IconButton 
        onClick={clickVote} 
        disabled={isDisabled} 
        style={{ color: isVote ? 'orange' : 'black', fontWeight: "bold", fontSize: "50px" }}
      >
        {isVote ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </IconButton>
      <CardContent>
        <Typography variant="h6" style={{ color: isVote ? 'orange' : 'black', fontWeight: "bold" }}>
          {countVotes}
        </Typography>
      </CardContent>
    </>
  );
};

export default Vote;
