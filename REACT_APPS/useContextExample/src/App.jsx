import React, { useState } from "react";
import "./App.css";
import Hijo from "./components/Hijo";

export const userContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  const changeLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        username: "Juan",
        password: "12345",
      });
    }
  };

  return (
    <userContext.Provider value={user}>
      <button onClick={changeLogin}>Change Login</button>
      <Hijo />
    </userContext.Provider>
  );
}

export default App;
