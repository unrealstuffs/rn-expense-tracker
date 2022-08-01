import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import Title from './Title'

const AddForm = ({ onSubmit }) => {
	const [title, setTitle] = useState()
	const [amount, setAmount] = useState()

	const pressHandler = () => {
		if (title.trim() && amount) {
			onSubmit(title, amount)
			setTitle('')
			setAmount('')
		} else {
			Alert.alert('Text or amount are empty')
		}
	}

	return (
		<>
			<Title title='Add new transaction' />
			<View style={styles.block}>
				<Text style={styles.label}>Text</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter text...'
					value={title}
					onChangeText={setTitle}
					autoCorrect={false}
				/>
			</View>
			<View style={styles.block}>
				<Text style={styles.label}>Amount</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter amount...'
					value={amount}
					onChangeText={setAmount}
					autoCorrect={false}
					keyboardType='numeric'
				/>
			</View>
			<View style={styles.button}>
				<Button title='Add transaction' onPress={pressHandler} />
			</View>
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
	button: {
		marginTop: 10,
	},
})

export default AddForm
