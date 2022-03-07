import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const composeEnhancer = composeWithDevTools()

//Create store
const store = createStore(rootReducer, applyMiddleware(thunk))

//Export store
export default store
