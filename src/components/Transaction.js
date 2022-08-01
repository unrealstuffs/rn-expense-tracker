import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const Transaction = ({ transaction, onRemove, onOpen }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => onOpen(transaction.id)}
			onLongPress={() => onRemove(transaction.id)}
		>
			<View
				style={[
					styles.item,
					transaction.amount > 0 ? styles.plus : styles.minus,
				]}
			>
				<Text style={styles.text}>{transaction.title}</Text>
				<Text style={styles.number}>{transaction.amount}</Text>
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
		fontWeight: '700',
		fontSize: 16,
	},
})

export default Transaction
