import todosReducer from './features/todos/todosSliceReducer'
import filtersReducer from './features/filters/filtersSliceReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer