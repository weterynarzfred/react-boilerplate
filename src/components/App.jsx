import { useDispatch, useTrackedState } from "@/components/StateProvider";
import { ACTION_TYPES } from "@/lib/mainReducer";

function App() {
  const state = useTrackedState();
  const dispatch = useDispatch();

  return <div className="App">
    <h1>react boilerplate with vite and swc</h1>
    <button onClick={() => dispatch({ type: ACTION_TYPES.TEST })}>{state.test}</button>
  </div>;
}

export default App;
