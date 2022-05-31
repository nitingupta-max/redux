const check = (state = { number: 0, employee: [] }, action) => {
  switch (action.type) {
    case 'storeEven':
      return {
        ...state,
        number: action.payload.number,
        employee: action.payload.data,
      }

    default:
      return state
  }
}

export default check
