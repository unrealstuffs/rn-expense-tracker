import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import EditModal from '../components/EditModal'
import Card from '../components/ui/Card'
import { THEME } from '../theme'

const TransactionScreen = ({ goBack, transaction, onRemove, onSave }) => {
	const [modal, setModal] = useState(false)

	const saveHandler = (title, amount) => {
		onSave(transaction.id, title, amount)
		setModal(false)
	}

	return (
		<>
			<EditModal
				title={transaction.title}
				amount={transaction.amount}
				visible={modal}
				onCancel={() => setModal(false)}
				onSave={saveHandler}
			/>
			<Card style={styles.card}>
				<View>
					<Text style={styles.title}>{transaction.title}</Text>
					<Text style={styles.amount}>{transaction.amount}</Text>
				</View>
				<Button title='Edit' onPress={() => setModal(true)} />
			</Card>

			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button
						title='Go back'
						color={THEME.GREY_COLOR}
						onPress={goBack}
					/>
				</View>
				<View style={styles.button}>
					<Button
						title='Delete'
						color={THEME.DANGER_COLOR}
						onPress={() => onRemove(transaction.id)}
					/>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		width: '49%',
	},
	title: {
		fontSize: 16,
	},
	amount: {
		fontSize: 22,
		fontWeight: '700',
	},
	card: {
		marginBottom: 20,
		padding: 15,
	},
})

export default TransactionScreen
