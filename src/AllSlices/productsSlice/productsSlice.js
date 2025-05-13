import { createSlice } from "@reduxjs/toolkit"; 
import { AllProducts } from "./productData";

const initialState = {
    dessertData: AllProducts.map(products => ({...products, quantity: 1, priceUpdate: products.price})),
    cartList: [],
}

export const productSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        IncreaseQuantity: (state, action) => {

            const item = state.dessertData.find(p => p.id === action.payload)
            const indexInCart = state.cartList.findIndex(p => p.id === action.payload);

            if (item) {
                item.quantity += 1;
                item.priceUpdate = item.quantity * item.price;
            }

            if (indexInCart !== -1) {
                // finds the particular cart item and them replace it with the latest on
                state.cartList[indexInCart] = {
                    ...item
                };
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.dessertData.find(p => p.id === action.payload)
            const indexInCart = state.cartList.findIndex(p => p.id === action.payload)

            if (item && item.quantity > 1) {
                item.quantity -= 1
                item.priceUpdate = item.quantity * item.price;
            }

            if(indexInCart !== -1) {
                state.cartList[indexInCart] = {
                    ...item,
                }
            }
        },
        addToCart: (state, action) => {
            const item = state.dessertData.find(p => p.id === action.payload)
            const checkItem = state.cartList.some(cl => cl.id === item.id)
            if (!checkItem) {
                state.cartList.push({ 
                    ...item
                }); // use spread to avoid mutation
            }
        },
        deleteCartItem: (state, action) => {
            const removedItem = state.cartList.filter(p => p.id !== action.payload)
            state.cartList = removedItem
        },
        clearCart: (state) => {
            state.cartList = []
        }
    }
})


export const overallState = (state) => state.productList.dessertData;
export const overallCart = (state) => state.productList.cartList;
export const {IncreaseQuantity, decreaseQuantity, addToCart, deleteCartItem, clearCart} = productSlice.actions

export default productSlice.reducer