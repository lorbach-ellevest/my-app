import React from 'react'
import PropTypes from 'prop-types'

import styles from './ItemForm.module.css'

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

export default TextInput
