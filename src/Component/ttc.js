import React, {useContext, useEffect, useState} from 'react';
import TVAContext from '../Context/TvaContext'

function TTC() {


  return(
    <div id="ttc">
          <div>
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
          <button
            onClick={clear}
          >recommencer</button>
    </div>
  )
}

export default TTC