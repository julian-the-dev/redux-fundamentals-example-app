import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './api/server'
import App from './App'
import { fetchTodos } from './features/todos/todosSliceReducer'
import './index.css'
import store from './store'

store.dispatch(fetchTodos())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
