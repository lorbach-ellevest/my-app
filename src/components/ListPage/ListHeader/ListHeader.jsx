import React from 'react'
import PropTypes from 'prop-types'

import styles from './ListHeader.module.css'

const ListHeader = props => {
	const handleClick = () => props.handleClickNew()

	return (
		<div className={styles.listHeader}>
			<h4 className={styles.title}>Fantastic Things to do in NYC <span className={styles.span}>...during a pandemic</span></h4>
			<button
				className={styles.btnAdd}
				onClick={handleClick}>
				new
			</button>
		</div>
	)
}

ListHeader.propTypes = {
	handleClickNew: PropTypes.func.isRequired
}

export default ListHeader
