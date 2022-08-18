import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import {
  increamentCouter,
  decreamentCouter,
} from "../../store/modules/example/action";
import { Button, Text } from "../styled-component";

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
      <Button onClick={onAdd}>Add</Button>
      <Text>Count:{count} </Text>
      <Button onClick={onSubtract}>Subtract</Button>
    </div>
  );
};

export default Example;
