import React from 'react'
import PropTypes from 'prop-types'

import styles from './Item.module.css'

const Item = ({ item, media, handleDelete, handleEditItem }) => (
	<div className={styles.item}>
		<div className={styles.itemHeader}>
			<h5 className={styles.title}>{item.title}</h5>

			<button
				key="edit"
				className={styles.btnEdit}
				onClick={() => handleEditItem(item)}>
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
)

Item.propTypes = {
	item: PropTypes.object.isRequired,
	media: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleEditItem: PropTypes.func.isRequired
}

export default Item
