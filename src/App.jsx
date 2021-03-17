import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";
import Canvas from "./Components/Canvas/Canvas";
import CTDBList from "./Components/CTDBList/CTDBList";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header logo="VISCO" project="CONOCO B" />
      <Input type="CTDB" />
      <CTDBList />
      <Canvas />
    </div>
  );
};

export default App;
