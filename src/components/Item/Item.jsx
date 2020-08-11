import React, { useState, Suspense } from 'react'

import PropTypes from 'prop-types'

import ModalPortal from 'components/modals/ModalPortal'
import ItemForm from 'components/ItemForm'

import Loader from 'components/Loader/Loader'

import styles from './Item.module.css'

/* Note on React Suspense/lazy (r16.6)
	React.lazy is a new feature that allows you to load components via code splitting

	traditionally we use import as a command and webpack bundles the imported files synchronously,
	however with dynamic imports proposal, files are imported asynchronously by using import as a function
	import('./MyFile').then(MyFiles => {}) -> returns a Promise

	So React.lazy uses this dynamic imports to return a component instead of a Promise
	In conjunction with React.Suspense allows you to show a fallback loader
	(or any other html element) while our component is loading. React Suspense has a similar functionality
	as the ErrorBoundary where it detects when our lazy components are waitign to be render and calls
	a fallback function to render a provisional component

	React Suspense, will catch the promises that are been thrown by the asyc compoenents
	that is below the tree and will wait for all of them to be resolved to render the tree below

	We may have more narrowed Suspense componenet inside another, with a different fallback and that will
	exclude the elements below from the Suspense component that is more above the tree

	React is still working on the Suspense functionality and will be integrated with concurrent react (async rendering) in
	the upcoming versions
*/

// Dynamically imports ItemPic
// const ItemPic = React.lazy(() => import('./ItemPic'))
// for demo...
const ItemPic = React.lazy(() => {
	return new Promise(resolve => {
    setTimeout(() => resolve(import('./ItemPic')), 3200);
  })
})

/** Item with Portal **/
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
