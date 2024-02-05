import { produce } from 'immer';
import { useReducer } from 'react';
import { createContainer } from 'react-tracked';

import mainReducer from "@/lib/mainReducer";

function useValue() {
  const [state, dispatch] = useReducer(produce(mainReducer), { test: 0 });

  return [state, dispatch];
}

const { Provider, useTrackedState, useUpdate } = createContainer(useValue);

export default function StateProvider({ children }) {
  return (<Provider>
    {children}
  </Provider>);
}

export {
  useTrackedState,
  useUpdate as useDispatch,
};
