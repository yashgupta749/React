const redux = require("redux");
const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newstore = store;
  if (action.type === "INCREMENT") {
    newstore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newstore = { counter: store.counter + 1 };
  } else if (action.type === "ADDITION") {
    newstore = { counter: store.counter + action.payload.number };
  }
  // console.log(action);
  return newstore;
};

const store = redux.createStore(reducer);
// it takes reducer
// simply ye redux ka purana method hai iska new version redux toolkit hai isliye server mana kr raaha hai use krne ko

//simply ye jo bhi value ham change kr rahe hai ya data fetch krna cha rhe hai to value nikal kr de raha hai
// or change UI ko print kr rha hai
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 3 } });
