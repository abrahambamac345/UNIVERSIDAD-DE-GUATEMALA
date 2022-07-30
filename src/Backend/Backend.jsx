import React from 'react';
import "./Backend.css";
const Backend = ({participantes}) => {
  return (
    <div className="participantes-content">
        {
          participantes.map((participante) => {
            return(
              <li>
                <ul>{participante.carné } </ul>
                <ul>{participante.nombre}</ul>
                <ul>{participante.telefono}</ul>
                <ul>{participante.poesía}</ul>
                <ul>{participante.carrera}</ul>
                <ul>participante # </ul>
              </li>
            )
          } )
        }
      </div>
  )
}
/*key={participantes.id}*/
export default Backend;

