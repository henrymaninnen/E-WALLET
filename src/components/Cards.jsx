import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardUser } from "./cardsSlice";
import { Link } from "react-router-dom";
import RenderCards from "./RenderCards";
import AddCard from "../pages/AddCard";

const Activities = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardUser())
    }, [])
  
    //HÄMTA STATE
    const { userInfo, cards } = useSelector((state) => {
        return state.user})

        
    //HÄMTA ANVÄNDARE
    return(
        <>
     {cards && cards.map((singleUser, i) => (
        <div>
         <RenderCards data={singleUser} key={i} unikId={i} {...userInfo}/>
         </div>
        ))}
        {/* {userInfo && <RenderCards {...userInfo}/>} */}
        <Link className="addCardButton" to={"/addcard"} state={userInfo}>Add card</Link>
        </>
        
    )

}
 
export default Activities;