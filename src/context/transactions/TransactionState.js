import { createContext, useContext, useReducer } from 'react'
import { Alert } from 'react-native'
import { ScreenContext } from '../screens/ScreenState'
import TransactionReducer from './TransactionReducer'

const initialState = {
	transactions: [],
	loading: false,
	error: null,
}

export const TransactionContext = createContext(initialState)

export const TransactionProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TransactionReducer, initialState)
	const { changeScreen } = useContext(ScreenContext)

	const addTransaction = async transaction => {
		clearError()
		try {
			const response = await fetch(
				'https://rn-expense-tracker-ce196-default-rtdb.firebaseio.com/transactions.json',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(transaction),
				}
			)
			const data = await response.json()

			dispatch({
				type: 'ADD_TRANSACTION',
				payload: { id: data.name, ...transaction },
			})
		} catch (err) {
			showError('Something went wrong. Try again later')
		}
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
					onPress: async () => {
						changeScreen(null)
						await fetch(
							`https://rn-expense-tracker-ce196-default-rtdb.firebaseio.com/transactions/${id}.json`,
							{
								method: 'DELETE',
								headers: { 'Content-Type': 'application/json' },
							}
						)
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

	const fetchTransactions = async () => {
		showLoader()
		clearError()
		try {
			const response = await fetch(
				'https://rn-expense-tracker-ce196-default-rtdb.firebaseio.com/transactions.json',
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)
			const data = await response.json()
			const transactions = Object.keys(data).map(key => ({
				...data[key],
				id: key,
			}))

			dispatch({ type: 'FETCH_TRANSACTIONS', payload: transactions })
		} catch (err) {
			showError('Something went wrong.\n Try again later')
		} finally {
			hideLoader()
		}
	}

	const updateTransaction = async transaction => {
		clearError()
		try {
			await fetch(
				`https://rn-expense-tracker-ce196-default-rtdb.firebaseio.com/transactions/${transaction.id}.json`,
				{
					method: 'PATCH',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						title: transaction.title,
						amount: transaction.amount,
					}),
				}
			)
			dispatch({
				type: 'UPDATE_TRANSACTION',
				payload: transaction,
			})
		} catch (error) {
			showError('Something went wrong.\n Try again later')
		}
	}

	const showLoader = () => {
		dispatch({ type: 'SHOW_LOADER' })
	}

	const hideLoader = () => {
		dispatch({ type: 'HIDE_LOADER' })
	}

	const showError = error => {
		dispatch({ type: 'SHOW_ERROR', payload: error })
	}

	const clearError = () => {
		dispatch({ type: 'HIDE_ERROR' })
	}

	return (
		<TransactionContext.Provider
			value={{
				transactions: state.transactions,
				loading: state.loading,
				error: state.error,
				addTransaction,
				removeTransaction,
				updateTransaction,
				fetchTransactions,
			}}
		>
			{children}
		</TransactionContext.Provider>
	)
}
