import KgButton from "./KgButton";
import Hello from "./Hello";
// import Files from "./files";
function App() {
  let myname = "yash";
  let fullName = () => {
    return "Yash Gupta";
  };
  return (
    <div>
      <div>
        <h1>Hey {myname} bro</h1>
        <p>Seeya {fullName()}</p>
        <KgButton></KgButton>
        <Hello></Hello>
      </div>
      {/* <div>
        <Files></Files>
        <Files></Files>
        <Files></Files>
        <Files></Files>
      </div> */}
    </div>
  );
}

export default App;
