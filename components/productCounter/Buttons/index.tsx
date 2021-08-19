import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { arttir,azalt } from '../../../store/actions/counter';



export const Buttons: FC = () => {
  const dispatch = useDispatch();
  return(
  <div>
    <button onClick={() => dispatch(arttir())}>+</button>
    <button onClick={() => dispatch(azalt())}>-</button>
  </div>
  )
}