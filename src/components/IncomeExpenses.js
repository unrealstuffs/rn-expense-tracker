import React from 'react'
import { StyleSheet, View } from 'react-native'
import moneyFormatter from '../utils/moneyFormatter'
import AppText from './ui/AppText'

const IncomeExpenses = ({ transactions }) => {
	const amounts = transactions.map(transaction => transaction.amount)

	const income = amounts
		.filter(item => item > 0)
		.reduce((acc, item) => (acc += item), 0)

	const expense =
		amounts
			.filter(item => item < 0)
			.reduce((acc, item) => (acc += item), 0) * -1

	return (
		<View style={styles.incExp}>
			<View
				style={[
					styles.block,
					{
						borderRightWidth: 1,
						borderColor: '#dedede',
						borderStyle: 'solid',
					},
				]}
			>
				<AppText style={styles.text}>Income</AppText>
				<AppText bold style={[styles.money, styles.plus]}>
					{moneyFormatter(income)}
				</AppText>
			</View>
			<View style={styles.block}>
				<AppText style={styles.text}>Expense</AppText>
				<AppText bold style={[styles.money, styles.minus]}>
					{moneyFormatter(expense)}
				</AppText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	incExp: {
		backgroundColor: '#fff',
		boxShadow:
			'0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
		elevation: 3,
		padding: 20,
		flexDirection: 'row',
	},
	block: {
		flex: 1,
	},
	text: {
		textAlign: 'center',
	},
	money: {
		fontSize: 20,
		fontWeight: '700',
		letterSpacing: 1,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 0,
		marginRight: 0,
		textAlign: 'center',
	},
	plus: {
		color: '#2ecc71',
	},
	minus: {
		color: '#c0392b',
	},
})

export default IncomeExpenses
