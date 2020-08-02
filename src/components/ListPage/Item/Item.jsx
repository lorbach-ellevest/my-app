import React from 'react'
import PropTypes from 'prop-types'

import styles from './Item.module.css'

class Item extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 1,
		}
	}

	handleClick() { console.log('handleclick');
		this.setState(prevState => ({
			count: ++prevState.count,
		}))
	}

	render() {
		const { item, media, handleDelete, handleEditItem } = this.props
		const { count } = this.state

		return  (
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
				<footer className={styles.footer}>
					<div className={styles.counter}>{count} Likes </div>
					<button
						key="check"
						className={styles.btnCheck}
						onClick={() => this.handleClick()}/>
				</footer>
			</div>
		)
	}
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
	media: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleEditItem: PropTypes.func.isRequired
}

export default Item
