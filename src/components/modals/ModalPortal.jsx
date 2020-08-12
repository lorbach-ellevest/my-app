import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import styles from './Modal.module.css'


/*
 * Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy
 * of the parent component.
 *
 * ReactDOM.createPortal(this.props.children, contentWrapper)
 */

// Id of the html element where our component will be appended
const container = document.getElementById('app');

class Modal extends React.Component {
	constructor(props) {
    super(props);
		// Wrapper were content will be mounted
    this.contentWrapper = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    container.appendChild(this.contentWrapper);
  }

  componentWillUnmount() {
    container.removeChild(this.contentWrapper);
  }

	render() {
		return (
 			ReactDOM.createPortal(
				<div className={styles.modal}>
					{this.props.children}
				</div>,
				this.contentWrapper
			)
		)
	}
}

Modal.propTypes = {
	children: PropTypes.object.isRequired
}

export default Modal
