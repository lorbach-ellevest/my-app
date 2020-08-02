import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring, presets } from 'react-motion'

import Item from '../Item/Item.jsx'
import styles from './List.module.css'

const List = props => {
	const listOfItems = props.items.map((item, index) =>
		<Motion
			key={index}
			defaultStyle={{maxh: 0}}
			style={{maxh: spring(200, presets.gentle)}}>
			{({maxh}) =>
				<li
					className={styles.listItem}
					style={{maxHeight: `${maxh}px`, overflow: 'hidden'}} >
					<Item
						media={props.media}
						item={item}
						handleDelete={props.handleDelete}
						handleEditItem={props.handleEditItem} />
				</li> }
		</Motion>
	)
return (
		<ul className={styles.list}>
			{props.items.length > 0
				? listOfItems
				: <div>
						<p>Loading...</p>
						<p>Please be patient!</p>
					</div>
			}
			{!!props.items.length && <p>
				Lucy's favorite is <span style={{fontWeight: 'bold'}}>{props.items[1].title}</span>
				</p>}
		</ul>
	)
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	media: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleEditItem: PropTypes.func.isRequired
};

export default List
