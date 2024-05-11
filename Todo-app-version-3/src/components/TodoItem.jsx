function TodoItem({ Todoname, Tododate, onclicked }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{Todoname}</div>
        <div className="col-4">{Tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onclicked(Todoname, Tododate)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
