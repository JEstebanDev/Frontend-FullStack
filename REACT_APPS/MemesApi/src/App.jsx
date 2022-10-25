import { useRef, useState } from "react";
import CardMemes from "./components/CardMemes";
import RequestApi from "./utils/RequestApi";

function App() {
  const listMemes = RequestApi();
  const [numb, setNum] = useState();
  const boton = useRef();

  const clickea = () => {
    boton += 1;
    console.log(boton);
  };
  return (
    <div className="app">
      <h1>{boton}</h1>
      <button onClick={clickea}>Click</button>
      {listMemes.map(function (item, i) {
        return <CardMemes key={i} item={item}></CardMemes>;
      })}
    </div>
  );
}

export default App;
