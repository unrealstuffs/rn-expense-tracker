import { createContext, useContext, useReducer } from 'react'
import { Alert } from 'react-native'
import { ScreenContext } from '../screens/ScreenState'
import TransactionReducer from './TransactionReducer'

const initialState = {
	transactions: [
		{ id: '1', title: 'aboba', amount: 200 },
		{ id: '2', title: 'aboba', amount: 2000 },
		{ id: '3', title: 'aboba', amount: -800 },
	],
}

export const TransactionContext = createContext(initialState)

export const TransactionProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TransactionReducer, initialState)
	const { changeScreen } = useContext(ScreenContext)

	const addTransaction = transaction => {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction,
		})
	}

	const removeTransaction = id => {
		const transaction = state.transactions.find(t => t.id === id)
		Alert.alert(
			'Delete transaction',
			`Are you sure you want to delete "${transaction.title}"?`,
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => {
						changeScreen(null)
						dispatch({
							type: 'DELETE_TRANSACTION',
							payload: id,
						})
					},
				},
			],
			{ cancelable: false }
		)
	}

	const updateTransaction = transaction => {
		dispatch({
			type: 'UPDATE_TRANSACTION',
			payload: transaction,
		})
	}

	return (
		<TransactionContext.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				removeTransaction,
				updateTransaction,
			}}
		>
			{children}
		</TransactionContext.Provider>
	)
}
