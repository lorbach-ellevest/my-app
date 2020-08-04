import React from 'react'
import PropTypes from 'prop-types'

import ItemForm from 'components/ItemForm'
import Modal from 'components/modals/Modal'

import ListHeader from './ListHeader/ListHeader'

import List from './List/List'

import styles from './ListPage.module.css'

class ListPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			activeItem: {
				id: '',
				title: '',
				description: ''
			},
		}
	}
	/* Lifecylce methods note:
	 * The following methods have been deprecated:
	 * componentWillMount -> UNSAFE_componentWillMount -> use componentDidMount()
	 * componentWillReceiveProps -> UNSAFE_componentWillReceiveProps -> use getDerivedStateFromProps(props, state) => sets new state
	 * componentWillUpdate -> UNSAFE_componentWillUpdate -> use getSnapshotBeforeUpdate( prevProps, prevState)
	 */
	UNSAFE__componentWillReceiveProps(nextProps) {
		this.setState(() => ({
			activeItem: null,
		}))
	}

	handleOpenModal = item => {
		this.setState((prevState) => ({
			activeItem: item,
			showModal: !prevState.showModal,
		}))
	}

	handleCloseModal = () => {
		this.setState((prevState) => ({
			activeItem: null,
			showModal: !prevState.showModal,
		}))
	}

	render() {
			let { actions: { deleteItem }, items, media } = this.props;

		return (
			<div id="listPage" className={styles.listPage}>
				{this.state.showModal &&
					<Modal>
						<ItemForm item={this.state.activeItem} handleCloseModal={this.handleCloseModal} />
					</Modal>
				}
				<section className={styles.itemsSection}>
					<ListHeader handleClickNew={this.handleOpenModal} />

					<List
						items={items}
						media={media}
						handleDelete={deleteItem}
						handleEditItem={this.handleOpenModal}
					/>
				</section>
			</div>
		);
	}
}

ListPage.propTypes = {
	actions: PropTypes.object.isRequired,
	items: PropTypes.array.isRequired,
	media: PropTypes.object.isRequired
};

export default ListPage
