export default (state, action) => {
	switch (action.type) {
		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [action.payload, ...state.transactions],
			}
		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter(
					transaction => transaction.id !== action.payload
				),
			}
		case 'UPDATE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.map(transaction => {
					if (transaction.id === action.payload.id) {
						transaction.title = action.payload.title
						transaction.amount = +action.payload.amount
					}
					return transaction
				}),
			}

		default:
			return state
	}
}
