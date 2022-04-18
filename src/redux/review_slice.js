import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activated: false,
    timeout: undefined
}

export const reviewSlice = createSlice(
    {
        name: 'review',
        initialState,
        reducers: {
            activate: (state) => {
                state.activated = true;
            },
            activateByClick: (state, action) => {
                console.log(state, action);
                state.activated = true;
                if (state.timeout === undefined)
                    state.timeout = setTimeout(() => {
                        alert("done")
                    }, action.payload)
            },
            deactivate: (state) => {

                state.activated = false;
            },

        }
    }
)
export const { activate, deactivate, activateByClick } = reviewSlice.actions;

export default reviewSlice.reducer;