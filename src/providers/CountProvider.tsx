import { useReducer } from "react";
import { CountAction, CountState } from "../@types/storeTypes";

function init(initialCount: number) {
  return { count: initialCount };
}

function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action?.payload ? action?.payload : 0);
    default:
      throw new Error();
  }
}

function Counter({ initialCount }: { initialCount: number }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
