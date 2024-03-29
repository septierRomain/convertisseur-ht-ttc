import { useState } from 'react';
import './App.css';
import Select from 'react-select'

import Undo from './Assets/undo.svg'
import Dougs from './Assets/dougs.svg'

function App() {

  const [taux, setTaux] = useState('') 
  const [ttc, setTtc] = useState('') 
  const [ht, setHt] = useState('') 
  const [tva, setTva] = useState('') 
  const [value, setValue] = useState('') 
  const [champTaux,setChampTaux] = useState(true)
  const [champ,setChamp] = useState(true)

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
    {value: '8.5', label: '8.5%'},
    {value: '5.5', label: '5.5%'},
    {value: '2.1', label: '2.1%'},
  ]
  const handleChange = (value) => {
    setValue(value)
    setTaux(value.value)
    setChampTaux(true)
    setTva('')
    setHt('')
    setTtc('')
  }

  const calculHT = (e) => {
    e.preventDefault()
    const resultHT = ( ttc / (1+( taux/100 )) )
    const resultTVA = ( (ttc / (1+( taux/100 ) )) * (taux/100) )
    if(taux){
      setHt((resultHT).toFixed(2))
      setTva((resultTVA).toFixed(2))
    } else if(taux === '') {setChampTaux(false)}
  }

  const calculTTC = (e) => {
    e.preventDefault()
    const resultTTC = ( ht * (1 + (taux/100)) )
    const resultTVA = ( (ht * ( taux/100 ) ))
    if (taux){
      setTtc((resultTTC).toFixed(2))
      setTva((resultTVA).toFixed(2))
    } else if(taux === '') {setChampTaux(false)}
  }
  const calculTVA = (e) => {
    e.preventDefault()
    const resultTTC = ( tva / (1 - (1/(1+(taux/100))) ))
    const resultHT = ( tva / (taux/100 ) )
    if (taux){
      setTtc((resultTTC).toFixed(2))
      setHt((resultHT).toFixed(2))
    } else if(taux === '') {setChampTaux(false)}
  }

  return (
    <div className="App">
        <header className="App-header">
          <img src={Dougs} alt="Logo Dougs" />
          <p>convertisseur HT-TTC</p>
        </header>
        <div className="container">
        <h1>Retrouvez le montant HT à partir du TTC et inversement</h1>
        <div className="result">
          <div id='taux_tva'>
            <label htmlFor='taux' className='label' >
              Taux de TVA en % :
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

            <form action="submit" onSubmit={calculHT}>
              <div id="ttc">
                <label htmlFor='ttc' className='label'>
                  Montant TTC :
                    <input 
                    name='ttc'
                    type='text'
                    placeholder='TTC'
                    value={ttc}
                    onChange={(e) => setTtc((e.target.value) || '')}
                    onFocus={handleKey}
                    onBlur={calculHT}
                    />
                </label> 
              </div>
            </form>
            
            <form action="submit" onSubmit={calculTTC}>
              <div id='ht'>
              <label htmlFor='ht' className='label'>
                  Montant HT :
                  <input 
                  name='ht'
                  type='text'
                  placeholder='HT'
                  value={ht}
                  onChange={(e) => setHt((e.target.value) || '')}
                  onBlur={calculTTC}
                />
                </label>
              </div>
            </form>

            <div id='tva'>
              <label htmlFor="tva" className='label'>
                Montant de la TVA :
                <input 
                  name='tva'
                  type='text'
                  placeholder='TVA'
                  value={tva}
                  onChange={(e) => setTva((e.target.value) || '')}
                  onBlur={calculTVA}
                />              
              </label>
            </div>
              
        </div>
          <div className="button_undo">
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
