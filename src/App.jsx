import { useState } from 'react'
import './App.css'
import data from "./data.json"

const Aterianosa = ({osa}) => {

}

const Ateria = ({ateriantiedot}) => {

}

const Paiva = ({paivantiedot}) => {

}

const App = () => {

  const [lunchlist, setLunchlist] = useState(null)
  useEffect(() => {
    setLunchlist(data)
  }, [])
  return(
    <h1>Hei maailma</h1>
  )
}

export default App
