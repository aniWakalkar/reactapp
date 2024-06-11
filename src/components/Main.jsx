import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/action/actions';

const Main = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='container h-[100%] mx-auto px-5 py-10 border border-red-100'>
      <h1>Counter: {count}</h1>
      <button className='mt-4 p-2 rounded-lg text-white bg-blue-800 hover:bg-blue-gray-400' onClick={() => dispatch(increment())}>Increment</button>
      <button className='mx-2 p-2 rounded-lg text-white bg-blue-800 hover:bg-blue-gray-400' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='mx-2 p-2 rounded-lg text-white bg-blue-800 hover:bg-blue-gray-400' onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Main;