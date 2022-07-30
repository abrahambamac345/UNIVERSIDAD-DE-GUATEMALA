import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Backend from "../Backend/Backend";

const Main = () => {
    const [participantes, setParticipantes] = useState([]);
    const [values, setValues] = useState({
      carné: "",
      nombre: "",
      dirección: "",
      genero: "",
      telefono: "",
      cumpleaños: "", 
      carrera: "",
      poesía:"",
      inscripción:"",
    });
    return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App 
        values={values}
        setValues={setValues}
        participantes={participantes}
        seParticipantes={setParticipantes} />} />
        <Route path="Backend" element={<Backend  participantes={participantes}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
