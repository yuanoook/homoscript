import { useCallback } from 'ganic-usex';
import useStorage from './useStorage';

const useReducer = (reducer, initState, key) => {
  const [state, setState] = useStorage(key, initState);
  const dispatch = useCallback(action => setState(s => reducer(s, action)));
  return [state, dispatch];
}

export default useReducer;
