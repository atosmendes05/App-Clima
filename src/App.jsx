import React, {useState} from "react"
import fetchData from './services/api'
import Card from "./card";
import initialdata from "./helps/initialdata";

function App() {

  const [City,setCity] = useState('')
  const [Data,setData] = useState(initialdata)

  const submite = function (evento) {
    evento.preventDefault()
    fetchData(City).then(function (response){
      setData(response)
    })
  }

  return (
    <div className="app">
      <form onSubmit={submite}>
        <input
          value={City}
          onChange={function(evento){
          setCity(evento.target.value)
          }} type="text" placeholder="Cidade" />
        <button type="submit">Pesquisa</button>
      </form>
      <Card data={Data} />
    </div>
  )
}

export default App