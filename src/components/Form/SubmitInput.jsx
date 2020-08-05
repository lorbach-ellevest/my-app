import React from 'react'
import PropTypes from 'prop-types'

import styles from './Form.module.css'

const SubmitInput = ({ value, onClick }) => {
	console.log('rendering SubmitInput');
	return (
		<input
			type="submit"
			className={styles.btnSubmit}
	    value={value}
	    onClick={onClick}
		/>
	)
}

SubmitInput.propTypes = {
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string,
}

SubmitInput.defaultProps = {
	value: 'Submit',
}

export default SubmitInput
// export default React.memo(SubmitInput)
