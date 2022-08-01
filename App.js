import { useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'

import Navbar from './src/components/Navbar'
import MainScreen from './src/screens/MainScreen'
import TransactionScreen from './src/screens/TransactionScreen'
import AppLoading from 'expo-app-loading'

const loadApplication = async () => {
	await Font.loadAsync({
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
	})
}

export default function App() {
	const [isReady, setIsReady] = useState(false)
	const [transactionId, setTransactionId] = useState(null)
	const [transactions, setTransactions] = useState([])

	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onError={err => console.log(err)}
				onFinish={() => setIsReady(true)}
			/>
		)
	}

	const addTransaction = (title, amount) => {
		setTransactions(prev => [
			{
				id: Date.now().toString(),
				title,
				amount: +amount,
			},
			...prev,
		])
	}

	const removeTransaction = id => {
		const transaction = transactions.find(t => t.id === id)
		Alert.alert(
			'Delete transaction',
			`Do you want to delete "${transaction.title}"?`,
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => {
						setTransactionId(null)
						setTransactions(prev =>
							prev.filter(transaction => transaction.id !== id)
						)
					},
				},
			],
			{ cancelable: false }
		)
	}

	const updateTransaction = (id, title, amount) => {
		setTransactions(prev =>
			prev.map(t => {
				if (t.id === id) {
					t.title = title
					t.amount = +amount
				}
				return t
			})
		)
	}

	let content = (
		<MainScreen
			transactions={transactions}
			addTransaction={addTransaction}
			removeTransaction={removeTransaction}
			openTransaction={setTransactionId}
		/>
	)

	if (transactionId) {
		const selectedTransaction = transactions.find(
			transaction => transaction.id === transactionId
		)
		content = (
			<TransactionScreen
				onRemove={removeTransaction}
				goBack={() => setTransactionId(null)}
				transaction={selectedTransaction}
				onSave={updateTransaction}
			/>
		)
	}

	return (
		<ScrollView>
			<Navbar />
			<View style={styles.container}>{content}</View>
		</ScrollView>
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
