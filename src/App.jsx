import Input from "./Components/Input/Input";
import Canvas from "./Components/Canvas/Canvas";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>VISCO</header>
      <Input type="CTDB" />
      <Canvas />
    </div>
  );
};

export default App;
