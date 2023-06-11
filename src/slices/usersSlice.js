import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from "uuid";

const initialState = {
    users: [{
        name: "John",
        email: "email@example.com",
        gen: 23,
        id: uuid(),
      },
      {
        name: "Ama",
        email: "ama@example.com",
        gen: 23,
        id: uuid(),
      },
      {
        name: "Peter",
        email: "peter@example.com",
        gen: 23,
        id: uuid(),
      },],
  }

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action)=>{
            state.users = [...state.users, action.payload]
        },
        editUser: (state, action)=> {
            state.users = state.users.map((user) => (user.id === action.payload.id ? action.payload : user))
        },
        deleteUser: (state, action)=> {
            state.users = state.users.filter((user)=> (user.id !== action.payload))
        }
    }
})

export const { addUser, deleteUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;