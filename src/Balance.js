import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Balance = () => {
	return (
		<View style={styles.block}>
			<Text style={styles.text}>Your Balance</Text>
			<Text style={styles.number}>₽260.00</Text>
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
