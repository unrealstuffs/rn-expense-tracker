import { useState } from 'react'
import * as Font from 'expo-font'

import AppLoading from 'expo-app-loading'
import { TransactionProvider } from './src/context/transactions/TransactionState'
import { ScreenProvider } from './src/context/screens/ScreenState'
import Layout from './src/Layout'

const loadApplication = async () => {
	await Font.loadAsync({
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
	})
}

export default function App() {
	const [isReady, setIsReady] = useState(false)

	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onError={err => console.log(err)}
				onFinish={() => setIsReady(true)}
			/>
		)
	}

	return (
		<ScreenProvider>
			<TransactionProvider>
				<Layout />
			</TransactionProvider>
		</ScreenProvider>
	)
}
