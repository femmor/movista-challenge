import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import RootReducer from "./rootReducer"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

export default store
