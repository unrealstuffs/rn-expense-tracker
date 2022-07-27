import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Navbar = () => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.text}>Expense Tracker</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 70,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#3949ab',
		paddingBottom: 10,
	},
	text: {
		color: '#fff',
		fontWeight: '700',
		fontSize: 20,
	},
})

export default Navbar
