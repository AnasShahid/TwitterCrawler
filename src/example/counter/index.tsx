import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import {
  increamentCouter,
  decreamentCouter,
} from "../../store/modules/example/action";

const Example = () => {
  const dispatch = useDispatch();
  const count = useSelector(({ exampleReducer }: RootState) => exampleReducer);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increamentCouter());
        }}
      >
        Add
      </button>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          dispatch(decreamentCouter());
        }}
      >
        Subtract
      </button>
    </div>
  );
};

export default Example;
