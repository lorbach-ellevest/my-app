import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Motion, spring, presets } from 'react-motion'

import SubmitInput from './SubmitInput'
import TextInput from './TextInput'
import TextArea from './TextArea'

import styles from './ItemForm.module.css'

const FORM_DEFAULT = {
	description: undefined,
	id: undefined,
	title: undefined,
}

const ItemForm = ({ actions: { saveItem }, item, handleCloseModal }) => {
	const [form, setForm] = useState(FORM_DEFAULT)

	// Similar to componentDidMount and componentDidUpdate:
  useEffect(() => { console.log('useeffect');
		if (Object.keys(item).length) setForm(item)
  }, [item]) // <- we pass items to prevent an infinie chain of updates

	const handleChange = ({ target }) => {
		const { name, value } = target

		setForm({
			...form,
			[name]: value,
		})
	}

	const handleSubmit = () => {
		saveItem(form)
		handleCloseModal()
	}

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
						{ form.id !== '' ? 'Edit Item' : 'Add New Item' }
					</h2>
				<div className={styles.form}>
					<TextInput value={form.title} onChange={handleChange} />
					<TextArea value={form.description} onChange={handleChange} />
					<SubmitInput value={form.id ? 'Save Changes' : 'Add Item'} onClick={handleSubmit} />
				</div>
				</div>
			</div>}
		</Motion>
	)
}

ItemForm.propTypes = {
	actions: PropTypes.object.isRequired,
	handleCloseModal: PropTypes.func.isRequired,
	item: PropTypes.object,
}

ItemForm.defaultProps = {
	item: {},
}

export default ItemForm
