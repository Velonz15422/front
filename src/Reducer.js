export const initialState = {
    basket: [],
    user: null,
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET",
    REDUCE_NAV: "REDUCE_NAV"
}
export const totalCarrito = (basket) => {
    return basket?.reduce((acc, item) => item.precio + acc, 0)
}

export const reduceNav = (basket) => {
    return basket.lenght(basket)
}
export const reducer = (state = initialState, action) =>{
    console.log(action)
    switch (action.type) {

        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_ITEM":
            const indice = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket = [...state.basket];
            if (indice >= 0) {
                newBasket.splice(indice, 1)
            } else { console.log('no se puede remover') }
            return {
                ...state,
                basket: newBasket,
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "EMPTY_BASKET":
            return{
                ...state,
                basket: action.basket
            };    
            case "REDUCE_NAV":
            return{
                ...state,
                basket: action.basket.lenght
            }; 

            
    }return state;
    

};

export default reducer