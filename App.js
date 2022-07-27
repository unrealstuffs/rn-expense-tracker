import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AddForm from './src/AddForm'
import Balance from './src/Balance'
import IncomeExpenses from './src/IncomeExpenses'
import Navbar from './src/Navbar'
import TransactionList from './src/TransactionList'

export default function App() {
	const [transactions, setTransactions] = useState([])

	const AddTransaction = (title, amount) => {
		setTransactions(prev => [
			...prev,
			{
				id: Date.now().toString(),
				title,
				amount,
			},
		])
	}

	return (
		<>
			<Navbar />
			<View style={styles.container}>
				<Balance />
				<IncomeExpenses />
				<TransactionList transactions={transactions} />
				<AddForm onSubmit={AddTransaction} />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginBottom: 20,
		paddingLeft: 30,
		paddingRight: 30,
	},
})
