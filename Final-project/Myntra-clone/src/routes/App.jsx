import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeItem from "../components/HomeItem";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
