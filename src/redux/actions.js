import axios from "axios"

//Actions get todos
export const getTodos = () => {
  return async (dispath, getState) => {
    dispath({
      type: "todoList/getTodosLoading",
    })
    try {
      const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
      })
      await promise.then(() => {
        console.log("het thoi gian ngu")
      })

      console.log("Try get todos")
      const respon = await axios.get("http://localhost:3000/todos")
      console.log({
        respon,
      })
      dispath(getTodosSuccess(respon.data))
    } catch (e) {
      console.error(e)
      dispath(getTodosFailure())
    }
  }
}
//Actions get todos success
export const getTodosSuccess = (data) => {
  return {
    type: "todoList/getTodosSuccess",
    payload: data,
  }
}
//Actions get todos
export const getTodosFailure = () => {
  return {
    type: "todoList/getTodoFailure",
  }
}

//Actions add todo
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  }
}

//Actions search filter change
export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  }
}

//Actions status filter changed
export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  }
}

//Actions status filter changed
export const priorityFilterChange = (priority) => {
  return {
    type: "filters/priorityFilterChange",
    payload: priority,
  }
}

//Actions toggle status
export const toggleStatus = (id) => {
  return {
    type: "todoList/toggleStatus",
    payload: id,
  }
}
