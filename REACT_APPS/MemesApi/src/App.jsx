import CardMemes from "./components/CardMemes";
import RequestApi from "./utils/RequestApi";

function App() {
  const listMemes = RequestApi();
  console.log(listMemes.title);
  return (
    <div className="app">
      {listMemes.map(function (item, i) {
        return <CardMemes key={i} item={item}></CardMemes>;
      })}
    </div>
  );
}

export default App;
