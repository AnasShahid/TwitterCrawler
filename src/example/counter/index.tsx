import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import {
  increamentCouter,
  decreamentCouter,
} from "../../store/modules/example/action";
import { Button, Text } from "../styled-component";
import UserPopOver from "../../components/common/pop-over";

const Counter = () => {
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
      <Button onClick={onAdd}>Add</Button>
      <Text>Count:{count} </Text>
      <Button onClick={onSubtract}>Subtract</Button>
      <UserPopOver />
    </div>
  );
};

export default Counter;
