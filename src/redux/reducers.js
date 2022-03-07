import { combineReducers } from "redux"
import filterSlice from "../components/Filters/filterSlice"
import todoSlice from "../components/TodoList/todoSlice"

const rootReducer = combineReducers({
  filters: filterSlice,
  todoList: todoSlice,
})

export default rootReducer
