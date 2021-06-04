import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Landing />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          adipisci nihil deserunt dolorem corrupti facere quos possimus enim,
          voluptatem voluptatum aperiam recusandae odio repellat vitae est a
          veniam modi error.
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
