import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {incremented} from "../../redux/features/counterSlice";

const Counter: React.FC = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrementCounter = () => dispatch(incremented());

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrementCounter}>+1</button>
    </>
  );
};

export default Counter;
