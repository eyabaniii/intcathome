import React from 'react'
import './Accueil.css';
import Présentation from './Présentation';
import Service from './Service';

const Accueil = () => {
  return (
    <div className='Accueil'>
      <div className="ap1">
        <h1>NETTOYAGE rapide et écologique à domicile</h1>
        <button>Reservez en ligne!</button>
      </div>
      <Service></Service>
<Présentation></Présentation>

    </div>
  )
}

export default Accueil
