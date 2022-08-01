import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moneyFormatter from '../utils/moneyFormatter'

const Balance = ({ transactions }) => {
	const amounts = transactions.map(t => t.amount)

	const total = amounts.reduce((acc, item) => (acc += item), 0)

	return (
		<View style={styles.block}>
			<Text style={styles.text}>Your Balance</Text>
			<Text style={styles.number}>{moneyFormatter(total)}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		marginBottom: 20,
	},
	text: {
		textTransform: 'uppercase',
	},
	number: {
		letterSpacing: 1,
		fontSize: 24,
		fontWeight: '700',
	},
})

export default Balance
