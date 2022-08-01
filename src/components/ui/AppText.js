import { StyleSheet, Text } from 'react-native'
import React from 'react'

const AppText = ({ style, children, bold }) => {
	return (
		<Text style={[bold ? styles.bold : styles.default, style]}>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	default: {
		fontFamily: 'roboto-regular',
	},
	bold: {
		fontFamily: 'roboto-bold',
	},
})

export default AppText
