import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UseData from './Hook/UseData.js'
import Resident from './components/Resident.jsx'
import Location from './components/Location'
import InputS from './components/InputS'
import i1 from './Image/1.jpg'
import i2 from './Image/2.jpg'
import i3 from './Image/3.jpg'
import i4 from './Image/4.jpg'
import i5 from './Image/5.jpg'
import i6 from './Image/6.jpg'
import i7 from './Image/7.jpg'
import i8 from './Image/8.jpg'
import i9 from './Image/9.jpg'
import i10 from './Image/10.jpg'
import i11 from './Image/11.jpg'
import i12 from './Image/12.jpg'
import i13 from './Image/13.jpg'
import i14 from './Image/14.jpg'
import i15 from './Image/15.jpg'
import i16 from './Image/16.jpg'


function App() {
  const img = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16]

  const numberRandom = Math.ceil(Math.random() * 126)
  const [URL, setURL] = useState(`https://rickandmortyapi.com/api/location/${numberRandom}`)
  
  //const URL = `https://rickandmortyapi.com/api/location/${numberRandom}`
  //let data = UseData(URL)
  //let Data=data[0]

  
  let {Data} = UseData(URL)
 
  console.log(Data)  

  const style = {
    backgroundImage: "url({i1})"
  }
  const Numberimg = Math.floor(Math.random() * 16)
  return (
    <div className="App">
      <div>
        <div className='navbar' >
          <img src={img[Numberimg]} alt="" />
        </div>
        <div className='location-info'>
          <Location Data={Data} />
          <div className='search'>
            <InputS setURL={setURL} />
            {
              /*
              <input type="text" />
              <button type='submit'>Search</button>
              <p> </p>
              */
            }
          </div>
        </div>
      </div>

      <div className='cards'>
        {Data?.residents.map(resident => <Resident resident={resident} key={resident} />)}
      </div>

    </div>
  )
}

export default App
