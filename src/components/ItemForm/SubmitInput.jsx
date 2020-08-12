import React from 'react'
import PropTypes from 'prop-types'

import styles from './ItemForm.module.css'

const SubmitInput = ({ value, onClick }) => (
	<input
		type="submit"
		className={styles.btnSubmit}
    value={value}
    onClick={onClick}
	/>
)


SubmitInput.propTypes = {
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string,
}

SubmitInput.defaultProps = {
	value: 'Submit',
}

export default React.memo(SubmitInput)
