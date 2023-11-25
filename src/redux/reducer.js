import { createSlice } from '@reduxjs/toolkit';

const intialState = [];

const addTodoreducer = createSlice({
    name: "todos",
    initialState: intialState,
    reducers: {
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },
    },
});

export const { addTodos } = addTodoreducer.actions;
export const reducer = addTodoreducer.reducer;