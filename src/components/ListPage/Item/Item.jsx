import React from 'react'
import PropTypes from 'prop-types'

import styles from './Item.module.css'

const Item = props => (
	<div className={styles.item}>
		<div className={styles.itemHeader}>
			<h5 className={styles.title}>{props.item.title}</h5>
			<button
				key={0}
				className={styles.btnEdit}
				onClick={() => props.handleEditItem(props.item)}>
				Edit
			</button>
			<button
				key={1}
				className={styles.btnDelete}
				onClick={() => props.handleDelete(props.item.id)}>
				Delete
			</button>
		</div>
		{!props.media.mobile &&
			<p className={styles.paragraph}>
				{props.item.description
					? props.item.description
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
