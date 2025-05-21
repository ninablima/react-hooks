// import { useState } from "react";

// export default function App() {

//   const [name] = useState("Nina");
//   const [situation, setSituation] = useState(true);

//   function changeSituation() {
//     setSituation(!situation);
//   }

//   return (
//     <>
//       <h2>Nome: {name}</h2>
//       <h2>Situação: {situation ? 'Ativo' : 'Inativo'}</h2>
//       <button onClick={changeSituation}>Mudar situação</button>
//     </>
//   )
// }


import Contador from "./components/Contador/Contador";

export default function App() {
  return(
    <>
    <Contador/>
    </>
  )
}
