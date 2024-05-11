function Todoitem1() {
  let Todoname = "Buy milk";
  let Tododate = "4/08/2023";
  return (
    <div class="container">
      <div class="row">
        <div class="col-6">{Todoname}</div>
        <div class="col-4">{Tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem1;
