const count = (state = 0, action) => {
  switch (action.type) {
    case 'PLUS_COUNT':
      return state + 1
 
    case 'MINUS_COUNT':
      return state - 1

    case 'RESET_COUNT':
      return 0

    default:
      return state
  }
}

export default count