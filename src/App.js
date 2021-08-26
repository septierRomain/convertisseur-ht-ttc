import { useEffect, useState } from 'react';
import './App.css';

import Undo from './Assets/undo.svg'

function App() {

  useEffect(() => {
    calculate()
  })

  const calculate = () => {
    const resultHT = ( ttc / (1+( taux/100 )) )
    const resultTVA = ( (ttc / (1+( taux/100 ) )) * (taux/100) )
    setTva((resultTVA).toFixed(2))
    setHt((resultHT).toFixed(2))
  }

  const clear = () => {
    setTva('')
    setHt('')
    setTtc('')
    setTaux('')
  }

  const [taux, setTaux] = useState('') 
  const [ttc, setTtc] = useState('') 
  const [ht, setHt] = useState('') 
  const [tva, setTva] = useState('') 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Convertissez en fonction du taux de TVA</h1>
        <div id='taux'>
            <label htmlFor='taux'>
              Taux en % :
              <input 
                name='taux'
                type='number'
                placeholder='Taux de TVA'
                value={taux}
                onChange={(e) => setTaux(parseInt(e.target.value) || 0)}
              />
            </label>
        </div>
          <div id="ttc">
            <div>
              <label htmlFor='ttc'>
                Montant TTC :
                <input 
                  name='ttc'
                  type='number'
                  placeholder='TTC'
                  value={ttc}
                  onChange={(e) => setTtc(parseInt(e.target.value) || 0)}
                />
              </label>
              </div>
            <div>
              <p>Montant HT : {ht}</p>
              <p>Montant de la TVA : {tva}</p>
            </div>
        </div>     
      <button
        onClick={clear}
      >
        <img src={Undo} alt='recommencer' />
      </button>
      </header>
    </div>
  );
}

export default App;
