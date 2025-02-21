import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import data from "./data.json"

const Aterianosa = ({osa}) => {
  return (
    <div className='Osa'>
      {osa}
    </div>
  )
}

const Ateria = ({ateriantiedot}) => {
  const [tykkaykset, setTykkaykset] = useState(0)

  if(ateriantiedot.Name === null) return null

  return(
    <div className='Ateria'>
      <h3>{ateriantiedot.Name}</h3>
      <p>Hinta: {ateriantiedot.Price}</p>
      <Aterianosa osa={ateriantiedot.Components} />
      <button onClick={() => setTykkaykset(tykkaykset + 1)}>Tykkaykset: {tykkaykset}</button>
    </div>
  )

}

const Paiva = ({paivantiedot}) => {
  const pvm = new Date(paivantiedot.Date)
  const vkp = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  //Rendered HTML
  return(
    <div className='Paiva'>
      <p>{vkp[pvm.getDay()]} {pvm.getDate()}.{pvm.getMonth() + 1}</p>
      <p>{paivantiedot.LunchTime}</p>
      {paivantiedot.SetMenus.map((ateria, indeksi) => (
        <Ateria ateriantiedot={ateria} key={indeksi}></Ateria>
      ) )}
    </div>
  )
}

const App = () => {
  //Toimintalogiikka
  const [lunchlist, setLunchlist] = useState(null)
  useEffect(() => {
    setLunchlist(data)
  }, [])

  if(lunchlist === null) return <p>Loading data...</p>

  return(
    <div className='App'>
      {/*/<Paiva paivantiedot={lunchlist.MenusForDays[0]}>*/}
      {lunchlist.MenusForDays.map((paiva, indeksi) => (
      <Paiva paivantiedot={paiva} key={indeksi}></Paiva>
      ))}
    </div>
  )
}

export default App
