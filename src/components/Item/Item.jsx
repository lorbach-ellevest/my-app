import React, { useState, Suspense } from 'react'

import PropTypes from 'prop-types'

import ModalPortal from 'components/modals/ModalPortal'
import ItemForm from 'components/ItemForm'

import Loader from 'components/Loader/Loader'

import styles from './Item.module.css'

// dynamic import
const ItemPic = React.lazy(() => import('./ItemPic'))

const Item = ({ item, media, handleDelete }) => {
	const [showModal, setShowModal] = useState(false)
	const [showPic, setShowPic] = useState(false)

	const toggleModal = () => setShowModal(!showModal)
	const togglePic = () => setShowPic(!showPic)
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
				{!media.mobile &&
					<p className={styles.paragraph}>
						{item.description
							? item.description
							: 'This item has no description'
						}
					</p>
				}
				<p onClick={togglePic} style={{ fontSize: '11px', padding: '10px' }}>
					TOGGLE PIC >>
				</p>

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
	media: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
}

export default Item
