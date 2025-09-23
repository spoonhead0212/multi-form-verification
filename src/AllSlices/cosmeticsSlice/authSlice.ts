import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersAcc } from "./auth";
import { RootState } from "../../app/store/store-types";

interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  image: string;
}
// This is shaping the type of data each user has

interface LoginCredentials {
  email: string;
  password: string;
}
// Tells the payload the kind of data thats coming

interface Cart {
    id: string;
    productName: string;
    category: string;
    price: number;
    image: string;
}

interface UserState {
  currentUser: Omit<User, 'password'> | null;
  currentUserCart: Cart[];
  allUsers: User[];
  error: string | null;
  isAuthenticated: boolean;
}
// The shape of the initial states

const initialState: UserState = {
  currentUser: null,
  currentUserCart: [],
  allUsers: usersAcc, // Direct assignment
  error: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<LoginCredentials>) => {
            const {email, password} = action.payload
            const userAccount = state.allUsers.find(users => email === users.email && password === users.password)
            if (userAccount) {
                state.currentUser = userAccount
                state.isAuthenticated = true
                state.error = null
            } else {
                state.error = 'Invalid email or password';
                state.isAuthenticated = false;
            }
        },
        logout: (state) => {
          state.currentUser = null;
          state.currentUserCart = []
          state.isAuthenticated = false;
          state.error = null;
        },

        clearError: (state) => {
            state.error = null;
        },
    }
})

export const {setUserData, logout, clearError} = authSlice.actions
export const loggedUser = (state: RootState) => state.auth.currentUser
export default authSlice.reducer