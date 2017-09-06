import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
//Adicionar tag filhas em componentes
ReactDOM.render(
  <Family>
    <Member name="Luis Osorio" lastName="Loureiro"/>
  </Family>
, document.getElementById('app'))
