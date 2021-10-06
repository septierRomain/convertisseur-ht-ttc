import { useState } from 'react';
import './App.css';
import Select from 'react-select'

import Undo from './Assets/undo.svg'
import Dougs from './Assets/dougs.svg'
import Calcul from './Assets/calculator-solid.svg'

function App() {

  const [taux, setTaux] = useState('') 
  const [ttc, setTtc] = useState('') 
  const [ht, setHt] = useState('') 
  const [tva, setTva] = useState('') 
  const [value, setValue] = useState('') 
  const [champTaux,setChampTaux] = useState(true)
  const [champ,setChamp] = useState(true)

  const calculate = () => {
    const resultHT = ( ttc / (1+( taux/100 )) )
    const resultTVA = ( (ttc / (1+( taux/100 ) )) * (taux/100) )
    const resultTtc = ( ht * (1 + (taux/100)) )
    
    if (taux !== ''){

      if(ttc !== ''){
        setHt((resultHT).toFixed(2))
      } else if (ht){
        setTtc((resultTtc).toFixed(2))
      } else {
        setChamp(false)
      }

    } else {
      setChampTaux(false)
    }

    setTva((resultTVA).toFixed(2))
  }

  const handleKey = () => {
    setChamp(true)
  }

  const clear = () => {
    setTva('')
    setHt('')
    setTtc('')
    setTaux('')
    setChampTaux(true)
    setChamp(true)
    setValue('')
  }

  const options = [
    {value: '20', label: '20%'},
    {value: '10', label: '10%'},
    {value: '5.5', label: '5.5%'},
  ]
  const handleChange = (value) => {
    setValue(value)
    setTaux(value.value)
    setChampTaux(true)
  }

  const calculHT = () => {
    const resultHT = ( ttc / (1+( taux/100 )) )
    if(ht !== null){
      setHt((resultHT).toFixed(2))
    }
  }
  const calculTTC = () => {
    const resultTTC = ( ht * (1 + (taux/100)) )
    if (ttc !== null){
      setHt((resultTTC).toFixed(2))
    }
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
          <div id='taux_tva'>
              <label htmlFor='taux' className='label' >
                Taux en % :
                <Select 
                name="tva"
                id="taux"
                value={value}
                onChange={handleChange}
                options={options}
                placeholder='Choisissez un taux'
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
                {ht ? 
                <input 
                  name='ttc'
                  type='text'
                  placeholder='TTC'
                  value={ttc}
                  readOnly
                />
                :
                <input 
                  name='ttc'
                  type='text'
                  placeholder='TTC'
                  value={ttc}
                  onChange={(e) => setTtc((e.target.value) || 0)}
                  onFocus={handleKey}
                  onBlur={calculHT}
                />                  
              }
              </label>
            </div>

            <div id='ht'>
            <label htmlFor='ht' className='label'>
                Montant HT :
              {ttc ?
              <input 
                name='ht'
                type='text'
                placeholder='HT'
                readOnly
                value={ht}
              />
              :                 
              <input 
                name='ht'
                type='text'
                placeholder='HT'
                value={ht}
                onChange={(e) => setHt((e.target.value) || 0)}
                onBlur={calculTTC}
              />}
              </label>

            </div>

            {champ ? '' : 
            <div>
              <p className='warning'>Merci de renseigner un montant HT ou TTC</p>
            </div>}

            <div id='tva'>
              <label htmlFor="tva" className='label'>Montant de la TVA :
                <input 
                  name='tva'
                  type='text'
                  placeholder='TVA'
                  readOnly
                  value={tva}
                />              
              </label>
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
