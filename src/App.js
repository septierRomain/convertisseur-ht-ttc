import { useState } from 'react';
import './App.css';

function App() {

  const [taux, setTaux] = useState('') 
  const [ht, setHt] = useState('') 
  const [tva, setTva] = useState('') 
  const [ttc, setTtc] = useState('') 

  const calculate = () => {
    const resultHT = (ttc/(1+(taux/100)))
    const resultTVA = ((ttc/(1+(taux/100))) * (taux/100) )
    setTva(resultTVA)
    setHt(resultHT)
  }

  const clear = () => {
    setTva('')
    setHt('')
    setTtc('')
    setTaux('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Convertissez du TTC vers le HT</h1>
        <div>
          <div>
            <label htmlFor='taux'>
              Taux
              <input 
                name='taux'
                type='number'
                placeholder='Taux de TVA'
                value={taux}
                onChange={(e) => setTaux(parseInt(e.target.value))}
              />
            </label>
          </div>
          <div>
            <label>
              TTC
              <input 
                name='ttc'
                type='number'
                placeholder='TTC'
                onChange={(e) => setTtc(parseInt(e.target.value))}
              />
            </label>
            </div>
          <div>
            <label>
              HT
              <input 
                name='ht'
                type='number'
                placeholder='HT'
                value={ht}
              />
            </label>
            </div>
          <div>
            <label>
              TVA
              <input 
                name='tva'
                type='number'
                placeholder='montant de TVA'
                value={tva}
              />
            </label>
            </div>
            <button
              onClick={calculate}
            >Calculez</button>
            <button
              onClick={clear}
            >recommencer</button>
        </div>
      </header>
    </div>
  );
}

export default App;
