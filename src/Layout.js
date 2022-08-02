import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { ScreenContext } from './context/screens/ScreenState'
import TransactionScreen from './screens/TransactionScreen'
import MainScreen from './screens/MainScreen'

const Layout = () => {
	const { transactionId } = useContext(ScreenContext)
	return (
		<ScrollView>
			<Navbar />
			<View style={styles.container}>
				{transactionId ? <TransactionScreen /> : <MainScreen />}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginBottom: 20,
		paddingLeft: 30,
		paddingRight: 30,
	},
})

export default Layout
