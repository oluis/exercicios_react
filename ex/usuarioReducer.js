const INITIAL_STATE = {primeiroNome: "", segundoNome: ""}

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return {...state, primeiroNome: 'Luis', segundoNome: 'Osorio'}
    default:
      return state
  }
}
