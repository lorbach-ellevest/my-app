import React from 'react'
import PropTypes from 'prop-types'

import styles from './ItemForm.module.css'

/* React.memo note:
	Recat.memo() returns a new memoized component
	The memoized content is reused as long as the props are the same on next renderings.
*/

const TextInput = ({ value,  onChange }) => (
	<input
		type="text"
		className={styles.inputText}
    name="title"
    value={value}
		placeholder="Enter activity name"
    onChange={onChange}
	/>
)


TextInput.propTypes = {
  value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
}

TextInput.defaultProps = {
	value: '',
}

export default React.memo(TextInput)
