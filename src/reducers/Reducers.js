export default (state = {}, action) => {
  switch (action.type) {
    case 'SERVICE_SELECTED_ACTION':
      return Object.assign({}, state, {
        category: action.payload.category,
        service: action.payload.service,
        data: action.payload.data
      })
    default:
      return state
  }
}