const initState = {
  todos: [
    // { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    // { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    // { id: 3, name: "Learn Javascript", completed: false, priority: "Low" },
  ],
  getTodosStatus: false,
  getTodosLoading: false,
}

const todoSlice = (state = initState, action) => {
  switch (action.type) {
    case "todoList/getTodosLoading":
      console.log("Loading get")
      return {
        ...state,
        getTodosLoading: true,
      }
    case "todoList/getTodosSuccess":
      console.log("Success loading")
      return {
        ...state,
        getTodosLoading: false,
        todos: [...action.payload],
      }
    case "todoList/getTodosFailure":
      return {
        ...state,
        getTodosLoading: false,
        todos: [],
      }
    case "todoList/addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case "todoList/toggleStatus":
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        ...state,
        todos: [...newTodos],
      }
    default:
      return state
  }
}

export default todoSlice
