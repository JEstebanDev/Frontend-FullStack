import "./App.css";
import StudentBoard from "./components/StudentBoard";
import StudentCard from "./components/StudentCard";

function App() {
  const listStudents = [
    {
      name: "Diego Morales",
      role: "Quiz Api C#",
      location: "Bolivia",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/bo.png",
    },
    {
      name: "Edgar Roman",
      role: "DevOps",
      location: "Mexico",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/mx.png",
    },
    {
      name: "Esteban Castaño",
      role: "Backend C#",
      location: "Colombia",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/co.png",
    },
    {
      name: "Joaquín Aman",
      role: "Quiz Api C#",
      location: "Argentina",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/ar.png",
    },

    {
      name: "Jose Martínez",
      role: "Frontend React",
      location: "Perú",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/pe.png",
    },
    {
      name: "Xochihua Sotarriba",
      role: "Frontend React",
      location: "Mexico",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/mx.png",
    },
  ];

  return (
    <div className="App">
      <StudentBoard listStudents={listStudents}> </StudentBoard>
    </div>
  );
}

export default App;
