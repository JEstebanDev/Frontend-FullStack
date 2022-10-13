import "./App.css";
import StudentCard from "./components/StudentCard";

function App() {
  const listStudents = [
    {
      name: "Diego Morales",
      role: "Quiz Api C#",
      country: "Bolivia",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/bo.png",
    },
    {
      name: "Edgar Roman",
      role: "DevOps",
      country: "Mexico",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/mx.png",
    },
    {
      name: "Esteban Castaño",
      role: "Backend C#",
      country: "Colombia",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/co.png",
    },
    {
      name: "Joaquin Aman",
      role: "Quiz Api C#",
      country: "Argentina",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/ar.png",
    },

    {
      name: "Jose Martinez",
      role: "Frontend React",
      country: "Peru",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/pe.png",
    },
    {
      name: "Xochihua Sotarriba",
      role: "Frontend React",
      country: "Mexico",
      srcCountry: "https://www.sic-info.org/wp-content/uploads/2014/01/mx.png",
    },
  ];

  return (
    <div className="App">
      <StudentCard listStudents={listStudents}></StudentCard>
    </div>
  );
}

export default App;
