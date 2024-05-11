import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  4;

  const finalItems = items.filter((item) => {
    const indexitems = bagItems.indexOf(item.id);
    return indexitems >= 0;
  });

  console.log("before map", finalItems);

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <BagSummary />
          <div className="bag-summary"></div>
        </div>
      </main>
    </>
  );
};

export default Bag;
