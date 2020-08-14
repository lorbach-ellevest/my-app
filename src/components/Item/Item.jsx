import React, { useState, Suspense } from 'react'

import PropTypes from 'prop-types'

import ModalPortal from 'components/modals/ModalPortal'
import ItemForm from 'components/ItemForm'

import Loader from 'components/Loader/Loader'

import { useMediaQuery } from 'context/MediaContext'

import styles from './Item.module.css'

const ItemPic = React.lazy(() => import('./ItemPic'))

const Item = ({ item, handleDelete }) => {
	const [showModal, setShowModal] = useState(false)
	const [showPic, setShowPic] = useState(false)

	const toggleModal = () => setShowModal(!showModal)
	const togglePic = () => setShowPic(!showPic)

	const mq = useMediaQuery()

	return (
		<>
			<div className={styles.item}>
				<div className={styles.itemHeader}>
					<h5 className={styles.title}>{item.title}</h5>

					<button key="edit" className={styles.btnEdit} onClick={toggleModal}>
						Edit
					</button>
					<button key="delete" className={styles.btnDelete} onClick={() => handleDelete(item.id)}>
						Delete
					</button>
				</div>
				<p onClick={togglePic} style={{ fontSize: '11px', padding: '10px' }}>
					TOGGLE PIC >>
				</p>
				<h4>{`You are using a ${mq}`}</h4>

				<Suspense fallback={<Loader />}>
					{showPic &&
						<ItemPic key={item.id} src={item.src} />
					}
				</Suspense>
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
	handleDelete: PropTypes.func.isRequired,
}

export default Item
