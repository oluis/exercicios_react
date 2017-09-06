import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
//Passar propriedade para tag filhas em componentes
ReactDOM.render(
  <Family lastName="Loureiro">
    <Member name="Luis Osorio"/>
  </Family>
, document.getElementById('app'))
