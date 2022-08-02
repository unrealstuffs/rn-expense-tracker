import React, { useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { ScreenContext } from '../context/screens/ScreenState'
import { TransactionContext } from '../context/transactions/TransactionState'
import AppText from './ui/AppText'

const Transaction = ({ transaction }) => {
	const { changeScreen, transactionId } = useContext(ScreenContext)
	const { removeTransaction } = useContext(TransactionContext)

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => {
				changeScreen(transaction.id)
			}}
			onLongPress={() => {
				removeTransaction(transaction.id)
			}}
		>
			<View
				style={[
					styles.item,
					transaction.amount > 0 ? styles.plus : styles.minus,
				]}
			>
				<AppText style={styles.text}>{transaction.title}</AppText>
				<AppText bold style={styles.number}>
					{transaction.amount}
				</AppText>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#fff',
		boxShadow:
			'0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
		elevation: 3,
		color: '#333',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		marginTop: 10,
		marginBottom: 10,
		borderRightWidth: 5,
		borderStyle: 'solid',
	},
	plus: {
		borderColor: '#2ecc71',
	},
	minus: {
		borderColor: '#c0392b',
	},
	number: {
		fontSize: 16,
	},
})

export default Transaction
