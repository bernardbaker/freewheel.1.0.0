export const serviceSelectedAction = (category, service, data) => dispatch => {
  dispatch({
    type: 'SERVICE_SELECTED_ACTION',
    payload: {category, service, data}
  })
}