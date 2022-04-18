import { configureStore } from "@reduxjs/toolkit"
import reviewReducer from "./review_slice"

export default configureStore({
    reducer: {
        review: reviewReducer
    }
})  