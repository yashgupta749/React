// by taken use ref:- useref ham ek refenence ki trh use krte hai or usse ham koi bhi change pr reprint nhi hota hai simple submit pr ek baari me piura code reprint ho jata hai

import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    dueDateElement.current.value = "";
    todoNameElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;

// using form and example of use ref

// import { useState, useRef } from "react";
// import { BiMessageAdd } from "react-icons/bi";

// function AddTodo({ onNewItem }) {
//   const [todoName, settodoName] = useState("");
//   const [dueDate, setdueDate] = useState("");
//   const NoofClicked = useRef(0);
//   // const todoNameElement=useRef();
//   // const dueDateElement = useRef();

//   const handleNameChange = (event) => {
//     settodoName(event.target.value);
//     // NoofClicked.current += 1;
//   };

//   const handleDateChange = (event) => {
//     setdueDate(event.target.value);
//   };
//   const handleAddButtonClicked = () => {
//     event.preventDefault();
//     onNewItem(todoName, dueDate);
//     settodoName("");
//     setdueDate("");
//     // console.log(`no of clicked:${NoofClicked.current}`);
//   };

//   return (
//     <div className="container text-center">
//       <form
//         className="row"
//         onSubmit={handleAddButtonClicked}
//         // used when we take form
//       >
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="Enter Todo Here"
//             value={todoName}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div className="col-4">
//           <input type="date" value={dueDate} onChange={handleDateChange} />
//         </div>
//         <div className="col-2">
//           <button
//             // type="button" ofrm me defaulty ye declare hota hai
//             className="btn btn-success"
//             // onClick={handleAddButtonClicked}
//           >
//             <BiMessageAdd />
//             {/* //react library  */}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default AddTodo;

// form ham basically server se interact ke time bahhut use aata hai or form me ham submissionn kisi bhi trh se kr skte hai mtlb action type
