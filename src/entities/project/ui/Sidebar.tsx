import * as React from "react"
import * as Router from "react-router-dom"
import { ViewerContext } from "./IFCViewer"
import { TodoCreator } from '@entities/todo';

export function Sidebar() {
  const { viewer } = React.useContext(ViewerContext)
  const createTodo = async () => {
		if (!viewer) { return }
		const todoCreator = await viewer.tools.get(TodoCreator)
		todoCreator.addTodo("My custom todo", "Medium")
	}
  return (
    <aside id="sidebar">
      <ul id="nav-buttons">
        <Router.Link to="/">
          <li><span className="material-icons-round">apartment</span>Projects</li>
        </Router.Link>
        <li><span className="material-icons-round">people</span>Users</li>
        <li onClick={createTodo}><span className="material-icons-round">construction</span>Create</li>
      </ul>
    </aside>
  )
}