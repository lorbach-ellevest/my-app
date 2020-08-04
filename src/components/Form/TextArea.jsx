import React from 'react'
import PropTypes from 'prop-types'

import styles from './Form.module.css'

const TextArea = ({ value, onChange }) => (
	<textarea
		className={styles.textarea}
	  name="description"
		maxLength="100"
		placeholder="Brief Description..."
		value={value}
    onChange={onChange}
	/>
)

TextArea.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
}

TextArea.defaultProps = {
	value: '',
}

export default TextArea;
