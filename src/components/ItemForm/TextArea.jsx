import React from 'react'
import PropTypes from 'prop-types'

import styles from './ItemForm.module.css'

const TextArea = ({ value, onChange }) => {
	console.log('rendering TextArea');
	return (
		<textarea
			className={styles.textarea}
		  name="description"
			maxLength="100"
			placeholder="Brief Description..."
			value={value}
	    onChange={onChange}
		/>
	)
}

TextArea.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
}

TextArea.defaultProps = {
	value: '',
}

export default TextArea
// export default React.memo(TextArea);
