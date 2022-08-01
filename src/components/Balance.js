import React from 'react'
import { StyleSheet, View } from 'react-native'
import moneyFormatter from '../utils/moneyFormatter'
import AppText from './ui/AppText'

const Balance = ({ transactions }) => {
	const amounts = transactions.map(t => t.amount)

	const total = amounts.reduce((acc, item) => (acc += item), 0)

	return (
		<View style={styles.block}>
			<AppText style={styles.text}>Your Balance</AppText>
			<AppText bold style={styles.number}>
				{moneyFormatter(total)}
			</AppText>
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
