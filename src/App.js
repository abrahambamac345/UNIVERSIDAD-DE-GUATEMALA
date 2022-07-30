import "./App.css";
import Formulario from "./UG COMPONENTES/Formulario.jsx";
import { Link } from "react-router-dom";
const App = ({ values, setValues, participantes, setParticipantes }) => {
  const handleSubmit = (e) => {
    console.log(participantes);
    console.log(values);
    e.preventDefault();
    setParticipantes([...participantes, values]);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.values });
  }; 

  const inputs = [
    {
      id: 1,
      name: "carné",
      type: "text",
      placeholder: "Carné",
      label: "Carné",
      errorm:
        "No mayor a 6 caracteres: Primer caracter debe ser (A), el tercer debe ser 5,  el último carácter debe de terminar en 1,3 o 9",
      pattern: "^A[A-Za-z1-9]{4}[1,3,9]$",
      required: true,
    },
    {
      id: 2,
      name: "nombre",
      type: "text",
      placeholder: "Nombre Completo",
      label: "Nombre Completo",
      errorm: "No alfanuméricos",
      pattern: "[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2,254}",
      required: true,
    },
    {
      id: 3,
      name: "dirección",
      type: "text",
      placeholder: "Direccion Domiciliar",
      label: "Dirección Domiciliar",
      required: true,
    },
    {
      id: 4,
      name: "genero",
      type: "list",
      placeholder: "Hombre, Mujer",
      label: "Genero",
      errorm: "Unicamente Hombre, Mujer",
      pattern: "^((h|H)ombre|(M|m)ujer)*$",
      required: true,
    },
    {
      id: 5,
      name: "telefono",
      type: "text",
      placeholder: "Telefono",
      label: "Numero Telefonico",
      errorm: "Unicamente numeros no (letras o Signos #&*-)",
      pattern: "^([Z0-9]){1,16}$",
      required: true,
    },
    {
      id: 6,
      name: "cumpleaños",
      type: "date",
      placeholder: "Fecha de Nacimiento",
      label: "Fecha de Nacimiento",
    },
    {
      id: 7,
      name: "carrera",
      type: "text",
      placeholder: "Carrera Universitaria",
      label: "Carrera Universitaria",
    },
    {
      id: 8,
      name: "poesía",
      type: "text",
      placeholder: "Genero de Poesía:Lírica, Épica, Dramática",
      label: "Genero de Poesía",
      errorm: "Unicamente numeros no (letras o Signos #&*)",
      pattern: "^((l|L)írica|(É|é)pica|(D|d)ramática)*$",
      required: true,
    },
  ];

  return (
    <div className=" App">
      <form onSubmit={handleSubmit}>
        <h1>UNIVERSIDAD DE GUATEMALA</h1>
        <h2>Primer Seminario de Poesía</h2>
        {inputs.map((input) => (
          <Formulario
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
 <div>
  <button> Enviar este formulario </button>
        <Link to="Backend">Participantes</Link>
      </div>
        
      </form>
     
    </div>
    
  );
};

export default App;
