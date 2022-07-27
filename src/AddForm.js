import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import Title from './Title'

const AddForm = ({ onSubmit }) => {
	const [title, setTitle] = useState()
	const [amount, setAmount] = useState()

	const pressHandler = () => {
		onSubmit(title, amount)
	}

	return (
		<>
			<Title title='Add new transaction' />
			<View style={styles.block}>
				<Text style={styles.label}>Text</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter text...'
					onChangeText={text => setTitle(text)}
				/>
			</View>
			<View style={styles.block}>
				<Text style={styles.label}>Amount</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter amount...'
					onChangeText={text => setAmount(text)}
				/>
			</View>
			<Button title='Add transaction' onPress={pressHandler} />
		</>
	)
}

const styles = StyleSheet.create({
	block: {
		marginBottom: 10,
	},
	label: {
		marginTop: 10,
		marginBottom: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: '#dedede',
		borderRadius: 2,
		fontSize: 16,
		padding: 10,
	},
})

export default AddForm
