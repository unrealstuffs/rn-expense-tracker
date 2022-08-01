import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AddForm from '../components/AddForm'
import Balance from '../components/Balance'
import IncomeExpenses from '../components/IncomeExpenses'
import Title from '../components/Title'
import Transaction from '../components/Transaction'

const MainScreen = ({
	addTransaction,
	transactions,
	removeTransaction,
	openTransaction,
}) => {
	let content = transactions.map(transaction => (
		<Transaction
			key={transaction.id}
			transaction={transaction}
			onRemove={removeTransaction}
			onOpen={openTransaction}
		/>
	))

	if (!transactions.length) {
		content = (
			<View style={styles.imgWrap}>
				<Image
					style={styles.img}
					source={require('../../assets/no-items.png')}
				/>
			</View>
		)
	}

	return (
		<>
			<Balance transactions={transactions} />
			<IncomeExpenses transactions={transactions} />
			<AddForm onSubmit={addTransaction} />
			<Title title='History' />
			{content}
		</>
	)
}
const styles = StyleSheet.create({
	imgWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: 300,
	},
	img: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
})

export default MainScreen
