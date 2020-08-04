import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ModalPortal from 'components/modals/ModalPortal'
import ItemForm from 'components/ItemForm'

import styles from './Item.module.css'

const Item = ({ item, media, handleDelete, handleEditItem }) => {
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
					<ItemForm item={item} handleCloseModal={toggleModal} />
				</ModalPortal>
			)}
		</>
	)
}


Item.propTypes = {
	item: PropTypes.object.isRequired,
	media: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleEditItem: PropTypes.func.isRequired
}

export default Item
