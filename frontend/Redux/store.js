import {combineReducer,legacy_createStore,applyMiddleware} from "redux"
import thunks from "redux-thunk"


const rootReducer=combineReducer({

})

export const store=legacy_createStore(rootReducer)