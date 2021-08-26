import { useEffect, useState } from 'react';
import './App.css';

import Undo from './Assets/undo.svg'
import Dougs from './Assets/dougs.svg'

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
          <img src={Dougs} alt="Logo Dougs" />
          <p>convertisseur HT-TTC</p>
        </header>
        <div className="container">
        <h1>Retrouvez le montant hors-taxe à partir du TTC</h1>
        <div className="result">
          <div id='taux'>
              <label htmlFor='taux' className='label'>
                Taux en % :
                <input 
                  name='taux'
                  type='text'
                  placeholder='Taux de TVA'
                  value={taux}
                  onChange={(e) => setTaux(parseInt(e.target.value) || 0)}
                />
              </label>
          </div>
            <div id="ttc">
                <label htmlFor='ttc' className='label'>
                  Montant TTC :
                  <input 
                    name='ttc'
                    type='text'
                    placeholder='TTC'
                    value={ttc}
                    onChange={(e) => setTtc(parseInt(e.target.value) || 0)}
                  />
                </label>
              <div>
                <div className="label"><p>Montant HT :</p><p>{ht}</p></div>
                <div className="label"><p>Montant de la TVA :</p><p>{tva}</p></div>
              </div>
          </div>

        </div>
          <div className="button_undo">
            <button
              className='undo'
              onClick={clear}
            >
              <img src={Undo} alt='recommencer' />
              recommencer
            </button>            
          </div>    
        </div>

    </div>
  );
}

export default App;
