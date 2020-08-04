import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ModalPortal from 'components/modals/ModalPortal'
import Form from 'components/Form'
import styles from './ListHeader.module.css'

// List Header with Portals
const ListHeader = props => {
	/* React note on Hooks:
		Functional Components are pure functions (function that given the same parameters will always return the same result)
		Functional Components are easier to read and test, less compilation => better performance
		Functional Components Caveat: do not have access to lifecycle methods/constructor => can't keep a state
		Solution(r16.8): Hooks - functions that let you “hook into” React state and lifecycle features from function components
	*/
	const [showModal, setShowModal] = useState(false)
	const toggleModal = () => setShowModal(!showModal)

	/* React note on Fragments
		Previously React allow us to render a single node. If we wanted to render 2 or more nodes we had
		to use a div tag or any other HTML element that will wrap them
		With <Fragment></Fragment> => <> </> we can wrap elements without adding extra elements to the DOM
	*/
	return (
		<>
			<div className={styles.listHeader}>
				<h4 className={styles.title}>Fantastic Things to do in NYC <span className={styles.span}>...during a pandemic</span></h4>
				<button
					className={styles.btnAdd}
					onClick={toggleModal}>
					new
				</button>
			</div>

			{showModal && (
				<ModalPortal>
					<Form handleCloseModal={toggleModal} />
				</ModalPortal>
			)}
		</>
	)
}

ListHeader.propTypes = {
	handleClickNew: PropTypes.func.isRequired
}

export default ListHeader
