import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ShowData from "./components/ShowData";

function App() {
  const [products, setProducts] = useState([]);
  const addProduct = (product) => {
    console.log(product);
    setProducts([...products, product]);
  };
  return (
    <>
      <Form addProduct={addProduct}></Form>
      <ShowData List={products}></ShowData>
    </>
  );
}

export default App;
