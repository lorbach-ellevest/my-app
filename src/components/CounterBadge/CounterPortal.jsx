import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import styles from './Counter.module.css'

const appNode = document.getElementById('app');

class Modal extends React.Component {
	constructor(props) {
    super(props);
		// Wrapper were content will be mounted
    this.el = document.createElement('div');
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
    appNode.appendChild(this.el);
  }

  componentWillUnmount() {
    appNode.removeChild(this.el);
  }

	render() {
		return (
 			ReactDOM.createPortal(
				<div className={styles.counterTag}>
					{this.props.children}
				</div>,
				this.el
			)
		)
	}
}

Modal.propTypes = {
	children: PropTypes.object.isRequired
}

export default Modal