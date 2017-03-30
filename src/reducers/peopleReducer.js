const peopleReducer = (state= [{}], action ) => {
  switch (action.type) {
    case 'GET_PEOPLE':
      return action.payloads
    default:
      return state
  }
}

export default peopleReducer
