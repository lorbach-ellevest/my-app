import React from 'react'
import PropTypes from 'prop-types'

import styles from './Form.module.css'

const TextInput = ({ value,  onChange }) => {
	console.log('rendering TextInput');
	return (
		<input
			type="text"
			className={styles.inputText}
	    name="title"
	    value={value}
			placeholder="Enter activity name"
	    onChange={onChange}
		/>
	)
}

TextInput.propTypes = {
  value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
}

TextInput.defaultProps = {
	value: '',
}

export default TextInput
// export default React.memo(TextInput)

/* React.memo note:
	Recat.memo() returns a new memoized component
	The memoized content is reused as long as the props are the same on next renderings.
*/
