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
		case 'SHOW_LOADER':
			return {
				...state,
				loading: true,
			}
		case 'HIDE_LOADER':
			return {
				...state,
				loading: false,
			}
		case 'HIDE_ERROR':
			return {
				...state,
				error: null,
			}
		case 'SHOW_ERROR':
			return {
				...state,
				error: action.payload,
			}
		case 'FETCH_TRANSACTIONS':
			return {
				...state,
				transactions: action.payload,
			}
		default:
			return state
	}
}
