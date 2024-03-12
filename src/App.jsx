import { useState } from "react"
import "./App.css"; 

function App() {
  const [NumeroUno, SetNumeroUno] = useState(0);
  const [NumeroDos, SetNumeroDos] = useState(0);
  const [Resultado, SetResultado] = useState(0);

  const handleChange = (event) => {
    SetNumeroUno(event.target.value);
  }

  const handleChange2 = (event) => {
    SetNumeroDos(event.target.value);
  }


  const handlerSumar = (event) => {
    SetResultado(parseFloat(NumeroUno) + parseFloat(NumeroDos));

  }

  const handlerMultiplicar = (event) => {
    SetResultado(parseFloat(NumeroUno) * parseFloat(NumeroDos));

  }

  const handlerRestar = (event) => {
    SetResultado(parseFloat(NumeroUno) - parseFloat(NumeroDos));

  }

  const handlerDividir = (event) => {
    SetResultado(parseFloat(NumeroUno) / parseFloat(NumeroDos));

  }

  return (
    <>

    <h1>Calculadora </h1>
    <input type="text" placeholder="Numero 1" value={NumeroUno} onChange={handleChange}/>
    <input type="text" placeholder="Numero 2" value={NumeroDos} onChange={handleChange2}/>

    <hr />
    <button onClick={handlerSumar}>Sumar</button>
    <button onClick={handlerRestar}>Restar</button>
    <button onClick={handlerMultiplicar}>Multiplicar</button>
    <button onClick={handlerDividir}>Dividir</button>
    <hr />
    <p>Resultado: {Resultado}</p>

    </>
  )
}

export default App
