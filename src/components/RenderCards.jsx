import { deleteCard, activateCard } from "../components/cardsSlice";
import {useDispatch} from "react-redux"
function RenderCards({ data, name, unikId, ccv}) {
    console.log(data.ccv)
    const dispatch = useDispatch();
  return (
      <>
       <div className="card">
        {data?.active && <strong>Active</strong>}
       <p>Vendor <br />
       <strong>{data?.vendor}</strong> </p>
       <h3> {data?.cardNumber}</h3>
      
       <div>      
        <p className="cardHolderNameP">CARDHOLDER NAME
          <br />  <strong>{name?.first} {name?.last}</strong></p>
          <p>valid
           <br /> <strong>{data?.valid}</strong> </p>
          </div>
          {/* <p>State: {data?.active}</p> */}
         {!data?.active && 
          <> 
         <button className="btn1" onClick={()=>{dispatch(deleteCard(unikId))}}>delete card</button>
          <button onClick={()=>{dispatch(activateCard(data.ccv))}}>activate card</button>
          </>}
       </div>
      </>
  )
}

export default RenderCards