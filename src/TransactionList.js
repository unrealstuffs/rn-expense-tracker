import React from 'react'
import Title from './Title'
import Transaction from './Transaction'

const TransactionList = ({ transactions }) => {
	return (
		<>
			<Title title='History' />
			{transactions.map(transaction => (
				<Transaction key={transaction.id} transaction={transaction} />
			))}
		</>
	)
}

export default TransactionList
