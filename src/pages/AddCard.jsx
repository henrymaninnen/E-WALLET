import { useLocation, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { cards } from "../components/cardsSlice"
import RenderCards from "../components/RenderCards";
import { addCard } from "../components/cardsSlice"

function AddCard() {
  const location = useLocation();

  const { userInfo, cards } = useSelector((state) => {
    return state.user;
  });
  console.log(location.state.name.first);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //HÄMTA STATE PÅ INPURREN
  const { cardInput, setcardInput } = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    //HÄMTA VALUE AV INPUT
    let cardnumberInput = document.querySelector("#cardnumber").value;
    let cardholderInput = document.querySelector("#cardholder").value;
    let validInput = document.querySelector("#valid").value;
    let ccvInput = document.querySelector("#ccv").value;
    let vendorInput = document.querySelector("#selectVendor").value;
    dispatch(
      addCard({
        cardName: cardholderInput,
        cardNumber: cardnumberInput,
        valid: validInput,
        ccv: ccvInput,
        vendor: vendorInput,
        cardState: false
      })
    );

    console.log(navigate);
    navigate("/");
  };
  //ÄNDRA I CARD NÄR MAN SKRIVER I INPUT
  const handleChange = (id) => {
    let inputs = document.querySelector(`#${id}`).value;
    document.querySelector(`#${id}Input`).textContent = inputs;
  };
  let name = `${location.state.name.first} ${location.state.name.last}`;
  //GET VALUES FROM INPUTS
  return (
    <div className="addCard-container">
      <div className="addCardInfoContainer">
        <p id="selectVendorInput">Vendor </p>
        <p id="cardnumberInput">Cardnumber {cardInput}</p>
        <p id="cardholderInput">Cardholder {name}</p>
        <p id="validInput">Valid {cardInput}</p>
        <p id="ccvInput">CCV</p>
        {/* <p>active: </p> */}
      </div>
      <form className="addCard-form">
        <label htmlFor="selectVendor">VENDOR</label>
        <select
          name="vendor"
          id="selectVendor"
          onChange={() => handleChange("selectVendor")}
        >
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
          <option value="visa">VISA</option>
          <option value="loopring">LOOPRING</option>
        </select>
        <label htmlFor="cardnumber">CARDNUMBER</label>
        <input
          id="cardnumber"
          type="text"
          onChange={() => handleChange("cardnumber")}
        />
        <label htmlFor="cardholder">CARDHOLDER</label>
        <input
          disabled
          placeholder={name}
          id="cardholder"
          type="text"
        />
        <label htmlFor="valid">VALID THRU</label>
        <input id="valid" type="text" onChange={() => handleChange("valid")} />
        <label htmlFor="ccv">CCV</label>
        <input id="ccv" type="text" onChange={() => handleChange("ccv")} />
        <button onClick={(e) => handleSubmit(e)}>
         <strong>ADD CARD</strong> 
         </button>
      </form>
    </div>
  );
}

export default AddCard;
