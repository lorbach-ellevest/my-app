import React from 'react'
import PropTypes from 'prop-types'

import styles from './Modal.module.css'

const Modal = props => (
	<div className={styles.modal}>
		{props.children}
	</div>
)

Modal.propTypes = {
	children: PropTypes.object.isRequired
}

export default Modal
