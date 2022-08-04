import { useCallback, useEffect, useState } from 'react'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { TransactionProvider } from './src/context/transactions/TransactionState'
import { ScreenProvider } from './src/context/screens/ScreenState'
import Layout from './src/Layout'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		const prepare = async () => {
			try {
				await Font.loadAsync({
					'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
					'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
				})
			} catch (error) {
				console.warn(error)
			} finally {
				setIsReady(true)
			}
		}

		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (isReady) {
			await SplashScreen.hideAsync()
		}
	}, [isReady])

	if (!isReady) {
		return null
	}

	return (
		<ScreenProvider>
			<TransactionProvider>
				<Layout onLayout={onLayoutRootView} />
			</TransactionProvider>
		</ScreenProvider>
	)
}
