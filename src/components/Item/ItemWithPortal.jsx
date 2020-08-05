import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ModalPortal from 'components/modals/ModalPortal'
import Form from 'components/Form'

import styles from './Item.module.css'

/** Item with Portal **/
const Item = ({ item, media, handleDelete }) => {
	const [showModal, setShowModal] = useState(false)
	const toggleModal = () => setShowModal(!showModal)

	return (
		<>
			<div className={styles.item}>
				<div className={styles.itemHeader}>
					<h5 className={styles.title}>{item.title}</h5>

					<button
						key="edit"
						className={styles.btnEdit}
						onClick={toggleModal}>
						Edit
					</button>
					<button
						key="delete"
						className={styles.btnDelete}
						onClick={() => handleDelete(item.id)}>
						Delete
					</button>
				</div>
				{!media.mobile &&
					<p className={styles.paragraph}>
						{item.description
							? item.description
							: 'This item has no description'
						}
					</p>
				}
			</div>

			{showModal && (
				<ModalPortal>
					<Form item={item} handleCloseModal={toggleModal} />
				</ModalPortal>
			)}
		</>
	)
}


Item.propTypes = {
	item: PropTypes.object.isRequired,
	media: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
}

export default Item
