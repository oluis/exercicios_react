import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
//Passar propriedade para tag filhas em componentes (multi elementos..)
ReactDOM.render(
  <Family lastName="Loureiro">
    <Member name="Luis Osorio"/>
    <Member name="Maria"/>
    <Member name="José"/>
    <Member name="João"/>
  </Family>
, document.getElementById('app'))
