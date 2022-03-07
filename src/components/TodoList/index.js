import { Col, Row, Input, Button, Select, Tag } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, getTodos, toggleStatus } from "../../redux/actions"
import Todo from "../Todo"
import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import {
  todoListSelector,
  searchTextSelector,
  todosRemainingSelector,
  todoLoading,
} from "../../redux/selectors"

export default function TodoList() {
  const [todoName, setTodoName] = useState("")
  const [priority, setpriority] = useState("Medium")

  const todoList = useSelector(todosRemainingSelector)
  const searchText = useSelector(searchTextSelector)
  const todosLoading = useSelector(todoLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    )
    setTodoName("")
    setpriority("Medium")
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handleSelectChange = (value) => {
    setpriority(value)
  }

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id))
  }

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todosLoading ? (
          <h2>Loading data...</h2>
        ) : (
          todoList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleToggleStatus={handleToggleStatus}
              />
            )
          })
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSelectChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
