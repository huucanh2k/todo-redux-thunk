import { createSelector } from "reselect"
//Selecter todolist
export const todoListSelector = (state) => state.todoList.todos

//Selecter loading todos
export const todoLoading = (state) => state.todoList.getTodosLoading

//Selecter searchText
export const searchTextSelector = (state) => state.filters.search

//Selecter status
export const statusFilterSelector = (state) => state.filters.status

//Selecter priority
export const priorityFilterSelector = (state) => state.filters.priority

//Selector todos remaining
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  priorityFilterSelector,
  (todoList, searchText, status, priority) => {
    let result = []
    if (status === "All") {
      console.log({
        searchText,
        todoList,
        status,
        priority,
      })
      const todoListFilterTextSearch = todoList.filter((todo) => {
        return todo.name.toLowerCase().includes(searchText.toLowerCase())
      })
      // const todoList
      if (priority.length) {
        result = todoListFilterTextSearch.filter((todo) => {
          return priority.includes(todo.priority)
        })
      } else {
        result = todoListFilterTextSearch
      }
    } else {
      //Filter status
      const todosFilterStatus = todoList.filter((todo) => {
        return todo.completed === (status === "Completed")
      })

      //Filter search text
      const todoListFilterTextSearch = todosFilterStatus.filter((todo) => {
        return todo.name.toLowerCase().includes(searchText.toLowerCase())
      })

      //Filter priority
      if (priority.length) {
        result = todoListFilterTextSearch.filter((todo) => {
          return priority.includes(todo.priority)
        })
      } else {
        result = todoListFilterTextSearch
      }
    }
    return result
  }
)
