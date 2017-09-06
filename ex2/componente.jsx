import React from 'react'
//mais otimizado.. sem (props) apenas passando direto o param
export default props => (//arrow function () quando se trata de retorno de bloco
  <h1>{props.value}</h1>
)
