import { useContext } from "react";
import { TodoItemsContext } from "../todo-items-store";

function TodoItem({ Todoname, Tododate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{Todoname}</div>
        <div className="col-4">{Tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(Todoname, Tododate)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
