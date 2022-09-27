import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
export const getCardUser = createAsyncThunk("user/getCardUser", async () =>{
    return fetch("https://randomuser.me/api/").then((res) => 
    res.json()
    );
});

const cardsSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null,
        cards:[
            {
                cardName: "",
                cardNumber: "4539 0400 1221 4442",
                valid: "27/28",
                ccv: "111",
                vendor: "BTC",
                active: true
              }
        ]

    },
    reducers: {
        addCard : (state,    action)=>{
            if ([...state.cards].length >= 4) {
                alert("maximum 4 cards")
                return
            }
            state.cards = [...state.cards, action.payload]
            
        },
        deleteCard : (state, action)=>{
            state.cards.splice(action.payload, 1)
        },
        activateCard : (state, action)=>{
           state.cards.forEach((card) => {
            card.active = false;
               if (card.ccv === action.payload) {
                if (card.active === false) {
                    card.active = true;
                    if (card.active = true) {
                        let cardIndex = state.cards.indexOf(card)
                        let element = state.cards[cardIndex];
                        state.cards.splice(cardIndex, 1);
                        state.cards.splice(0, 0, element);
                        
                    }

                    console.log(card.active);   
                } else{
                    card.active = false;
                    console.log(card.active);
                }
                  
                }
            })
        }
        
        },
    extraReducers:{
        [getCardUser.fulfilled]: (state, action) => {
            if(state.userInfo=== null){
                state.userInfo = action.payload.results[0];
            }
          }
    }
})

export const {addCard, deleteCard, activateCard} = cardsSlice.actions
export default cardsSlice.reducer;