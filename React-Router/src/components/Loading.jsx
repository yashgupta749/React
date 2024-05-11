import { ImSpinner3 } from "react-icons/im";
const Loading = () => {
  return (
    <center className="loading">
      <ImSpinner3 className="spinner" />
      <h2>Loading...</h2>
    </center>
  );
};
export default Loading;
