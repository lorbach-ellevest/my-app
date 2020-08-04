import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring, presets } from 'react-motion'

import SubmitInput from './SubmitInput'
import TextInput from './TextInput'
import TextArea from './TextArea'

import styles from './Form.module.css'

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			description: undefined,
			id: undefined,
			title: undefined,
		}
	}
	componentDidMount() {
		const { item } = this.props

		if (Object.keys(item).length) {
			this.setState(() => ({ ...item }))
		}
	}

	handleChange = e => {
		const { name, value } = e.target

		this.setState(() => ({ [name]: value }));
	}

	handleSubmit = () => {
		const { actions: { saveItem }, handleCloseModal } = this.props

		saveItem(this.state)
		handleCloseModal()
	}

	render() {
		const { handleCloseModal } = this.props
		const { description, id, title } = this.state

		return (
			<Motion
				defaultStyle={{maxh: 0}}
				style={{maxh: spring(500, presets.gentle)}} >
				{({maxh}) =>
				<div className={styles.itemForm} style={{maxHeight: `${maxh}px`}}>
					<button className={styles.btnClose} onClick={handleCloseModal}>
						x
					</button>
					<div className={styles.container}>
						<h2 className={styles.formTitle}>
							{ id !== '' ? 'Edit Item' : 'Add New Item' }
						</h2>
					<div className={styles.form}>
						<TextInput value={title} onChange={this.handleChange} />
						<TextArea value={description} onChange={this.handleChange} />
						<SubmitInput value={id ? 'Save Changes' : 'Add Item'} onClick={this.handleSubmit} />
					</div>
					</div>
				</div>}
			</Motion>
		)
	}
}

Form.propTypes = {
	actions: PropTypes.object.isRequired,
	handleCloseModal: PropTypes.func.isRequired,
	item: PropTypes.object,
}

Form.defaultProps = {
	item: {},
}

export default Form
