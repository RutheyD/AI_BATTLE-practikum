import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getChallenges } from "../redux/challengeSlice";
import { useEffect } from "react";

const WinnersImages=()=>{

    const dispatch=useDispatch<AppDispatch>();
    const topImages=useSelector((state:RootState)=>state.challenges.list);
    useEffect(()=>{
        dispatch(getChallenges());
        // console.log(challengesList.values);        
    },[dispatch]);
return(<>




</>)
}
export default WinnersImages