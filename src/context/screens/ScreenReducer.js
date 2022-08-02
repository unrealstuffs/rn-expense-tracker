export default (state, action) => {
	switch (action.type) {
		case 'CHANGE_SCREEN':
			return {
				...state,
				transactionId: action.payload,
			}

		default:
			return state
	}
}
