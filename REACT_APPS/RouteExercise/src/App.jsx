import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Link to={"dashboard"}>Go to dashboard</Link>
    </div>
  );
}

export default App;
