import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import {
  increamentCouter,
  decreamentCouter,
} from "../../store/modules/example/action";

const Example = () => {
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(increamentCouter());
  };
  const onSubtract = () => {
    dispatch(decreamentCouter());
  };
  const {
    example: { count },
  } = useSelector(({ exampleReducer }: RootState) => exampleReducer);

  return (
    <div>
      <button onClick={onAdd}>Add</button>
      <h2>Count:{count} </h2>
      <button onClick={onSubtract}>Subtract</button>
    </div>
  );
};

export default Example;
