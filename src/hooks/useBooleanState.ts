import { useCallback, useState } from 'react';

const useBooleanState = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((prevState) => !prevState), []);

  return [state, setTrue, setFalse, toggle] as const;
};

export default useBooleanState;
