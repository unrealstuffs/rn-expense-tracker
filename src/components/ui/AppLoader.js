import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { THEME } from '../../theme'

const AppLoader = () => {
	return (
		<View style={styles.center}>
			<ActivityIndicator size='large' color={THEME.MAIN_COLOR} />
		</View>
	)
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default AppLoader
