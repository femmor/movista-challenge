import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(() => {}, composeWithDevTools(applyMiddleware(sagaMiddleware)))

export default store
