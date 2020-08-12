import React, { useState } from 'react'

import ModalPortal from 'components/modals/ModalPortal'
import ItemForm from 'components/ItemForm'

import styles from './ListHeader.module.css'

const ListHeader = props => {
	const [showModal, setShowModal] = useState(false)
	const toggleModal = () => setShowModal(!showModal)

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
					<ItemForm handleCloseModal={toggleModal} />
				</ModalPortal>
			)}
		</>
	)
}

export default ListHeader
