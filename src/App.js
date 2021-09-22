import { useEffect, useState } from 'react';
import './App.css';

import Undo from './Assets/undo.svg'
import Dougs from './Assets/dougs.svg'
import Calcul from './Assets/calculator-solid.svg'

function App() {

  useEffect(() => {

  })

  const [taux, setTaux] = useState('') 
  const [ttc, setTtc] = useState('') 
  const [ht, setHt] = useState('') 
  const [tva, setTva] = useState('') 
  const [champTaux,setChampTaux] = useState(true)
  const [champ,setChamp] = useState(true)

  const calculate = () => {
    const resultHT = ( ttc / (1+( taux/100 )) )
    const resultTVA = ( (ttc / (1+( taux/100 ) )) * (taux/100) )
    const resultTtc = ( ht * (1 + (taux/100)) )
    
    if (taux !== ''){
      if(ttc){
        setHt((resultHT).toFixed(2))
      } else if (ht){
        setTtc((resultTtc).toFixed(2))
      }
    }else {
      setChampTaux(false)
    }

    // if (ttc || ht === ''){
    //   setChamp(false)
    // }
    if(taux === ''){
      setChampTaux(false)
    }
    setTva((resultTVA).toFixed(2))
  }

  const clear = () => {
    setTva('')
    setHt('')
    setTtc('')
    setTaux('')
    setChampTaux(true)
    setChamp(true)
  }

  return (
    <div className="App">
        <header className="App-header">
          <img src={Dougs} alt="Logo Dougs" />
          <p>convertisseur HT-TTC</p>
        </header>
        <div className="container">
        <h1>Retrouvez le montant HT à partir du TTC</h1>
        <div className="result">
          <div id='taux'>
              <label htmlFor='taux' className='label'>
                Taux en % :
                <input 
                  name='taux'
                  type='text'
                  placeholder='Taux de TVA'
                  value={taux}
                  max="2"
                  required
                  onChange={(e) => setTaux((e.target.value) || 0)}
                />
              </label>

              {champTaux ? '' :
                <div>
                  <p className='warning'>Merci de renseigner un taux de TVA</p>
                </div>
              }
          </div>
            <div id="ttc">
                <label htmlFor='ttc' className='label'>
                  Montant TTC :
                  <input 
                    name='ttc'
                    type='text'
                    placeholder='TTC'
                    value={ttc}
                    readOnly={ht ? true : false}
                    onChange={(e) => setTtc((e.target.value) || 0)}
                  />
                </label> 

              <div>
                <div id='ht'>
                  <label htmlFor='ht' className='label'>
                    Montant HT :
                    <input 
                      name='ht'
                      type='text'
                      placeholder='HT'
                      readOnly={ttc ? true : false}
                      value={ht}
                      onChange={(e) => setHt((e.target.value) || 0)}
                    />
                  </label>

                  {champ ? '' : 
                  <div>
                    <p className='warning'>Merci de renseigner un montant HT ou TTC</p>
                  </div>}

                </div>
                <div className="label"><p>Montant de la TVA :</p><p>{tva}</p></div>
              </div>
          </div>

        </div>
          <div className="button_undo">
            <button 
            className='undo' 
            onClick={() => calculate()}
            >
              <img src={Calcul} alt="calcul" style={{height:'20px'}} />
              Calcul
            </button>
            <button
              className='undo'
              onClick={()=>clear()}
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
