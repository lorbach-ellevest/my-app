import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring, presets } from 'react-motion'

import Item from 'components/Item/Item.jsx'

import styles from './List.module.css'

const List = props => {
	const listOfItems = props.items.map((item, index) =>
		<Motion
			key={index}
			defaultStyle={{h: 0, maxh: 0}}
			style={{h: spring(200, presets.gentle), maxh: spring(800, presets.gentle)}}>
			{({h, maxh}) =>
				<li
					className={styles.listItem}
					style={{maxHeight: `${maxh}px`, overflow: 'hidden'}} >
					<Item
						media={props.media}
						item={item}
						handleDelete={props.handleDelete}
					/>
				</li> }
		</Motion>
	)
return (
		<ul className={styles.list}>
			{listOfItems}
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
};

export default List
