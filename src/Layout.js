import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { ScreenContext } from './context/screens/ScreenState'
import TransactionScreen from './screens/TransactionScreen'
import MainScreen from './screens/MainScreen'

const Layout = ({ onLayout }) => {
	const { transactionId } = useContext(ScreenContext)
	return (
		<ScrollView>
			<View style={styles.wrapper} onLayout={onLayout}>
				<Navbar />
				<View style={styles.container}>
					{transactionId ? <TransactionScreen /> : <MainScreen />}
				</View>
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
		flex: 1,
	},
	wrapper: {
		flex: 1,
	},
})

export default Layout
