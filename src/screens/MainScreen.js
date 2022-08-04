import React, { useCallback, useContext, useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AddForm from '../components/AddForm'
import Balance from '../components/Balance'
import IncomeExpenses from '../components/IncomeExpenses'
import Title from '../components/ui/Title'
import Transaction from '../components/Transaction'
import { TransactionContext } from '../context/transactions/TransactionState'
import AppLoader from '../components/ui/AppLoader'
import AppText from '../components/ui/AppText'
import { THEME } from '../theme'
import AppButton from '../components/ui/AppButton'

const MainScreen = () => {
	const { transactions, fetchTransactions, loading, error } =
		useContext(TransactionContext)

	const loadTransactions = useCallback(
		async () => await fetchTransactions(),
		[fetchTransactions]
	)

	useEffect(() => {
		loadTransactions()
	}, [])

	if (loading) {
		return <AppLoader />
	}

	if (error) {
		return (
			<View style={styles.center}>
				<AppText style={styles.error}>{error}</AppText>
				<AppButton onPress={loadTransactions}>Retry</AppButton>
			</View>
		)
	}

	return (
		<>
			<Balance />
			<IncomeExpenses />
			<AddForm />
			<Title title='History' />
			{transactions &&
				transactions.map(transaction => (
					<Transaction
						key={transaction.id}
						transaction={transaction}
					/>
				))}
			{!transactions && (
				<View style={styles.imgWrap}>
					<Image
						style={styles.img}
						source={require('../../assets/no-items.png')}
					/>
				</View>
			)}
		</>
	)
}
const styles = StyleSheet.create({
	imgWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: 300,
	},
	img: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	error: {
		color: THEME.DANGER_COLOR,
		fontSize: 20,
		marginBottom: 10,
		textAlign: 'center',
	},
})

export default MainScreen
