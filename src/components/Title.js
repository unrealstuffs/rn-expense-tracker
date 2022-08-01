import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Title = ({ title }) => {
	return <Text style={styles.title}>{title}</Text>
}

const styles = StyleSheet.create({
	title: {
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: '#bbb',
		fontWeight: '700',
		fontSize: 18,
		paddingBottom: 10,
		marginTop: 40,
		marginBottom: 10,
	},
})

export default Title
