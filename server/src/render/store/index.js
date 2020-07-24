import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './main/reducer'
// reducer
const reducer = combineReducers({
    main: mainReducer
})
// 服务端渲染sotre
export const getServerStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

// 客户端渲染store
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)
export const getClientStore = () => {
    const defaultState = window.context.state
    return createStore(reducer, defaultState, enhancer)
}