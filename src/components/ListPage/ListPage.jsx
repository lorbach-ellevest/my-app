import React from 'react'
import PropTypes from 'prop-types'

// Error Boundary demo
// import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'

<<<<<<< HEAD
=======
// Portals demo + Counter returns strings
// import CounterBadge from 'components/CounterBadge/CounterBadge'
// import CounterPortal from 'components/CounterBadge/CounterPortal'
// import ListHeader from './ListHeader/ListHeaderWithPortal'


>>>>>>> adds portals, refactors forms, fixes redux, leaves app for demo
import ItemForm from 'components/ItemForm'
import Modal from 'components/modals/ModalPortal'

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
<<<<<<< HEAD

=======
	/* Lifecylce methods note:
	 * The following methods have been deprecated:
	 * componentWillMount -> UNSAFE_componentWillMount -> use componentDidMount()
	 * componentWillReceiveProps -> UNSAFE_componentWillReceiveProps -> use getDerivedStateFromProps(props, state) => sets new state
	 * componentWillUpdate -> UNSAFE_componentWillUpdate -> use getSnapshotBeforeUpdate( prevProps, prevState)
	 */
>>>>>>> adds portals, refactors forms, fixes redux, leaves app for demo
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
					{/* <ErrorBoundary> */}
						<List
							items={items}
							media={media}
							handleDelete={deleteItem}
							handleEditItem={this.handleOpenModal}
						/>
					{/*  </ErrorBoundary> */}
<<<<<<< HEAD
=======

					{/* Portals
						<CounterPortal>
						<CounterBadge count={items.length} />
					</CounterPortal>
					*/}
>>>>>>> adds portals, refactors forms, fixes redux, leaves app for demo
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
