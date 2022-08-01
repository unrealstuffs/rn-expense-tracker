import { Alert, Button, Modal, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { THEME } from '../theme'
import AppButton from './ui/AppButton'

const EditModal = ({ visible, onCancel, title, amount, onSave }) => {
	const [localTitle, setLocalTitle] = useState(title)
	const [localAmount, setLocalAmount] = useState(amount.toString())

	const saveHandler = () => {
		if (localTitle.trim().length < 1) {
			Alert.alert('Error!', `Title not may be empty`)
			return
		}
		if (localAmount.trim().length < 1) {
			Alert.alert('Error!', `Amount not may be empty`)
			return
		}
		onSave(localTitle, localAmount)
	}

	return (
		<Modal visible={visible} animationType='slide' transparent={false}>
			<View style={styles.wrap}>
				<TextInput
					onChangeText={setLocalTitle}
					value={localTitle}
					style={styles.input}
					placeholder='Enter title'
					autoCorrect={false}
				/>
				<TextInput
					onChangeText={setLocalAmount}
					value={localAmount}
					style={styles.input}
					placeholder='Enter amount'
					autoCorrect={false}
					keyboardType='numeric'
				/>
				<View style={styles.buttons}>
					<AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
						Cancel
					</AppButton>
					<AppButton onPress={saveHandler}>Save</AppButton>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		padding: 10,
		borderBottomColor: THEME.GREY_COLOR,
		borderBottomWidth: 2,
		width: '80%',
	},
	buttons: {
		width: '100%',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})

export default EditModal
