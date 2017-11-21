import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showMessage} from './usuarioActions'

const Usuario = props => (
  <div>
      <h1>Olá {props.usuario.primeiroNome} {props.usuario.segundoNome}</h1>
        <input
          value={props.usuario.primeiroNome}
          type="text" />
        <input
          value={props.usuario.segundoNome}
          type='text'/>
          <button onClick={props.showMessage}>Entrar</button>
  </div>
)

const mapStateToProps = state => ({usuario: state.usuario})
const mapDispatchToProps =
dispatch => bindActionCreators({
  showMessage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Usuario)
