import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function TodoList() {
  const [tasks, setTasks] = useState([
    // { userId: 1, id: "", title: "", completed: false },
  ]);
  function submitAddHandeler(e) {
    setTasks([
      ...tasks,
      {
        userId: 1,
        id: tasks.length + 1,
        title: e.target.value,
        completed: false,
      },
    ]);
  }
  function handleChangeCompleted(id) {
    setTasks(
      tasks.map((task, index) => {
        index === id ? (task.completed = !task.completed) : task;
      })
    );
  }
  function handleDelete(id) {
    setTasks(tasks.filter((task, index) => index !== id));
  }
  useEffect(() => {
    const getTasks = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5"
      );
      const initialData = await res.json();
      setTasks(...initialData);
    };
    getTasks();
  }, []);
  return (
    <section>
      <h1>Todo List</h1>
      <form onSubmit={submitAddHandeler}>
        <input type="text" className={`form-control`} />
        <button className={`btn-primary`}>Add</button>
      </form>
      <ul className={`list-group`}>
        {tasks.map((item) => (
          <li
            key={tasks.indexOf(item) + 1}
            style={{ textDecoration: item.completed ? "lineThrough" : "none" }}
            className={`list-group-item`}
          >
            <input type="checkbox" onChange={handleChangeCompleted} />
            {item}
            <button className={`bi-trash`} onClick={handleDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default TodoList;
