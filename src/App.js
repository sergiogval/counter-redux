import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter)
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
