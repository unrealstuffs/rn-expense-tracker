import { createContext, useReducer } from 'react'
import ScreenReducer from './ScreenReducer'

const initialState = {
	transactionId: null,
}

export const ScreenContext = createContext(initialState)

export const ScreenProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ScreenReducer, initialState)

	const changeScreen = id => dispatch({ type: 'CHANGE_SCREEN', payload: id })

	return (
		<ScreenContext.Provider
			value={{
				transactionId: state.transactionId,
				changeScreen,
			}}
		>
			{children}
		</ScreenContext.Provider>
	)
}
