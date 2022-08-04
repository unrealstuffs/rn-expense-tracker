import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, Alert, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Title from './ui/Title'
import AppText from './ui/AppText'
import { TransactionContext } from '../context/transactions/TransactionState'

const AddForm = () => {
	const { addTransaction } = useContext(TransactionContext)
	const [title, setTitle] = useState()
	const [amount, setAmount] = useState()

	const pressHandler = () => {
		if (title.trim() && amount) {
			addTransaction({
				title,
				amount: +amount,
			})
			setTitle('')
			setAmount('')
			Keyboard.dismiss()
		} else {
			Alert.alert('Text or amount are empty')
		}
	}

	return (
		<>
			<Title title='Add new transaction' />
			<View style={styles.block}>
				<AppText style={styles.label}>Text</AppText>
				<TextInput
					style={styles.input}
					placeholder='Enter text...'
					value={title}
					onChangeText={setTitle}
					autoCorrect={false}
				/>
			</View>
			<View style={styles.block}>
				<AppText style={styles.label}>Amount</AppText>
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
				<AntDesign.Button
					onPress={pressHandler}
					name='pluscircleo'
					style={{ justifyContent: 'center' }}
				>
					Add transaction
				</AntDesign.Button>
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
