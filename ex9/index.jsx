import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
//Criado componente de contador mudando o state value
ReactDOM.render(
<ClassComponent label='Contador' initialValue={10}></ClassComponent>
, document.getElementById('app'))
