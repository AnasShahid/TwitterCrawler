import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../../store/modules/example/action";
import { RootState } from "../../store/reducer";
import { Button, Text } from "../styled-component";

const Counter = () => {
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(incrementCounter());
  };
  const onSubtract = () => {
    dispatch(decrementCounter());
  };
  const {
    example: { count },
  } = useSelector(({ exampleReducer }: RootState) => exampleReducer);

  return (
    <div>
      <Button onClick={onAdd}>Add</Button>
      <Text>Count:{count} </Text>
      <Button onClick={onSubtract}>Subtract</Button>
    </div>
  );
};

export default Counter;
