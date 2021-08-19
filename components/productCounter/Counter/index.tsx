import type { FC } from 'react';

import {useSelector} from 'react-redux'

export const Counter: FC = () => {
  const counter = useSelector(state => state);
  console.log(counter);
  return(
    <div>{counter}</div>
  )
}
