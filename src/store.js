import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { print1, print2, print3 } from './exampleAddons/middleware'
import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(print1, print2, print3)
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)
export default store