import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './features/filters/filtersSliceReducer'
import todosReducer from './features/todos/todosSliceReducer'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
  }
})

export default store