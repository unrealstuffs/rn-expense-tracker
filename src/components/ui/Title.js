import React from 'react'
import { StyleSheet } from 'react-native'
import AppText from '../ui/AppText'

const Title = ({ title }) => {
	return (
		<AppText bold style={styles.title}>
			{title}
		</AppText>
	)
}

const styles = StyleSheet.create({
	title: {
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: '#bbb',
		fontSize: 18,
		paddingBottom: 10,
		marginTop: 40,
		marginBottom: 10,
	},
})

export default Title
