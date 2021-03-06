export const initialState ={
    basket: [],
};


export const getBasketTotal= (basket)=> 
    basket?.reduce((amount,item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'Add_to_cart':
            return{
                ...state,
                basket: [...state.basket, action.item]
            };

            case 'Remove_item':
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];

            if (index >= 0){
                newBasket.splice(index,1);
            }else {
                console.warn(`Can not remove product (id: ${action.id}) as its not in basket`)
            }

            return{
                ...state,
                basket:newBasket
            }

            case "Set_user":
                return{
                    ...state,
                    user: action.user
                }
            
                case "EMPTY_BASKET":
                    return{
                        ...state,
                        basket: []
                    }    

            default:
                return state;
    }
};
export default reducer;