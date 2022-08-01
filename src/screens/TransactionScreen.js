import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import EditModal from '../components/EditModal'
import AppButton from '../components/ui/AppButton'
import AppText from '../components/ui/AppText'
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
					<AppText style={styles.title}>{transaction.title}</AppText>
					<AppText bold style={styles.amount}>
						{transaction.amount}
					</AppText>
				</View>

				<AppButton onPress={() => setModal(true)}>
					<FontAwesome name='edit' size={20} />
				</AppButton>
			</Card>

			<View style={styles.buttons}>
				<View style={styles.button}>
					<AppButton color={THEME.GREY_COLOR} onPress={goBack}>
						<AntDesign name='back' size={20} color='#fff' />
					</AppButton>
				</View>
				<View style={styles.button}>
					<AppButton
						color={THEME.DANGER_COLOR}
						onPress={() => onRemove(transaction.id)}
					>
						<FontAwesome name='remove' size={20} color='#fff' />
					</AppButton>
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
		width: Dimensions.get('window').width / 2.5,
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
