import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { THEME } from '../theme'

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
		backgroundColor: THEME.MAIN_COLOR,
		paddingBottom: 10,
	},
	text: {
		color: '#fff',
		fontWeight: '700',
		fontSize: 20,
	},
})

export default Navbar
